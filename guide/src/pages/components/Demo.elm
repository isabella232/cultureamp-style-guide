module Demo exposing (..)

import Dict
import Json.Decode as Json
import Html exposing (Html, node, div, pre, text)
import Html.Attributes exposing (property)


{-| Utilities for Kaizen Demo components

Our Kaizen demos re-use the same prop-types for React and Elm components.
We do this by passing React JSX objects in as flags, and using these utilities
to write decoders that translate React components into Elm Html.

-}



-- JSON DECODERS


stringEnum : String -> List ( String, a ) -> Json.Decoder a
stringEnum error stringToValueMappings =
    Json.string
        |> Json.andThen
            (\string ->
                case Dict.get string (Dict.fromList stringToValueMappings) of
                    Just value ->
                        Json.succeed value

                    Nothing ->
                        Json.fail ("Error decoding '" ++ string ++ "': " ++ error)
            )



-- CONFIG UPDATERS


variantFlag : config -> Bool -> config -> config
variantFlag config flag previousConfig =
    if flag then
        config
    else
        previousConfig



-- PROP DECODER PIPELINE
-- Pattern for easier to understand JSON decoder pipeline from https://medium.com/@eeue56/json-decoding-in-elm-is-still-difficult-cad2d1fb39ae


decodeField : String -> Json.Decoder typeOfField -> (typeOfField -> previousType -> nextType) -> Json.Value -> Result String previousType -> Result String nextType
decodeField fieldName decoder =
    decodeAndUpdate (Json.field fieldName decoder)


decodeOptionalField : String -> Json.Decoder typeOfField -> (typeOfField -> nextType -> nextType) -> Json.Value -> Result String nextType -> Result String nextType
decodeOptionalField fieldName decoder update =
    let
        optionalFieldDecoder =
            (Json.maybe << Json.field fieldName) decoder

        maybeUpdate maybeValue =
            case maybeValue of
                Just value ->
                    update value

                Nothing ->
                    identity
    in
        decodeAndUpdate optionalFieldDecoder maybeUpdate


decodeAndUpdate : Json.Decoder typeOfField -> (typeOfField -> previousType -> nextType) -> Json.Value -> Result String previousType -> Result String nextType
decodeAndUpdate decoder update json previousResult =
    let
        decoded =
            Json.decodeValue decoder json
    in
        case decoded of
            Ok value ->
                Result.map (update value) previousResult

            Err message ->
                case previousResult of
                    Ok previousValue ->
                        Err message

                    Err previousMessage ->
                        Err (previousMessage ++ "\nAnd " ++ message)



-- JSX DECODERS


{-| A decoder for React JSX nodes that returns stateless Elm Html
-}
type alias JsxDecoder msg =
    Json.Decoder (List (Html msg))


{-| A decoder for React JSX nodes that returns Elm Html as well as messages
we can use to initialise state for the component.
-}
type alias JsxDecoderWithInitMessages msg =
    Json.Decoder (NodesAndInitMessages msg)


{-| A list of component decoders matched to their React display names
-}
type alias ComponentDecoders msg =
    List ( String, JsxDecoderWithInitMessages msg )


type alias NodesAndInitMessages msg =
    ( List (Html msg), List msg )


type alias JsxNodeInfo msg =
    { name : String
    , attributes : List (Html.Attribute msg)
    , children : NodesAndInitMessages msg
    }


{-| Prepare your initial state by parsing a JSX node and applying the init messages
-}
initModelFromJsx : Json.Value -> ComponentDecoders msg -> model -> (msg -> model -> model) -> model
initModelFromJsx jsxNode componentDecoders initialModel update =
    let
        result =
            Json.decodeValue (jsxChildren componentDecoders) jsxNode

        messages =
            case result of
                Ok ( nodes, messages ) ->
                    messages

                Err str ->
                    -- Question: should we introduce some kind of error handling here?
                    []
    in
        List.foldl update initialModel messages


{-| Parse a JSX node and view the resulting Html.
If an error is encountered, it will be displayed as HTML.
-}
viewJsxNodes : Json.Value -> ComponentDecoders msg -> Html msg
viewJsxNodes jsxNode componentDecoders =
    let
        result =
            Json.decodeValue (jsxChildren componentDecoders) jsxNode
    in
        case result of
            Ok ( nodes, messages ) ->
                div [] nodes

            Err str ->
                pre [] [ text <| "Error decoding JSX node: " ++ str ]


{-| Create a JsxDecoder (with init messages for initialising state)

This will recursively decode a JSX DOM tree, decoding HTML, text nodes, and
even custom components (using the given component decoders).

This attempts to handle all common forms of React.Node:

  - Null values will be converted to empty text nodes ("")
  - Strings will be converted to text nodes
  - Elements whose name begins with a lowercase character will be treated as
    plain HTML elements
  - Elements whose name begins with an uppercase character will be treated as
    a component. If a component decoder with that name was provided, it will be
    used, otherwise the JSON decoding will fail.

Generally you should use `initModelFromJsx` and `viewJsxNodes` rather
than using this decoder directly.

-}
jsxChildren : ComponentDecoders msg -> JsxDecoderWithInitMessages msg
jsxChildren componentDecoders =
    let
        lazilyRecurse : JsxDecoderWithInitMessages msg
        lazilyRecurse =
            Json.lazy <| (\_ -> jsxChildren componentDecoders)

        flattenChildrenList : List (NodesAndInitMessages msg) -> JsxDecoderWithInitMessages msg
        flattenChildrenList list =
            let
                childNodes : List (Html msg)
                childNodes =
                    list
                        |> List.map (\item -> Tuple.first item)
                        |> List.concat

                childMessages : List msg
                childMessages =
                    list
                        |> List.map (\item -> Tuple.second item)
                        |> List.concat
            in
                Json.succeed ( childNodes, childMessages )

        createChildNode : JsxNodeInfo msg -> JsxDecoderWithInitMessages msg
        createChildNode { name, attributes, children } =
            let
                ( childNodes, childMessages ) =
                    children
            in
                case Dict.fromList componentDecoders |> Dict.get name of
                    Just componentDecoder ->
                        componentDecoder

                    Nothing ->
                        if startsWithUpper name then
                            Json.fail ("No decoder was provided for the component " ++ name)
                        else
                            Json.succeed ( [ node name attributes childNodes ], childMessages )
    in
        Json.oneOf
            ([ (Json.list lazilyRecurse)
                |> Json.andThen flattenChildrenList
             , Json.map3 JsxNodeInfo
                (Json.field "type" Json.string)
                jsxAttributes
                (Json.at [ "props", "children" ] lazilyRecurse)
                |> Json.andThen createChildNode
             , Json.string
                |> Json.andThen (\string -> Json.succeed ( [ text string ], [] ))
             , Json.null ( [ text "" ], [] )
             ]
            )


{-| A simple decoder for decoding JSX that contains only plain HTML, no custom components

You can use this directly in your custom component decoders:

    decodePipeline
    |> decodeField "children" htmlJsxChildren (|>) props

-}
htmlJsxChildren : JsxDecoder msg
htmlJsxChildren =
    let
        simplifyResult : NodesAndInitMessages msg -> JsxDecoder msg
        simplifyResult nodesAndInitMessages =
            Json.succeed <| Tuple.first nodesAndInitMessages
    in
        jsxChildren []
            |> Json.andThen simplifyResult


{-| Decode the attributes of a Html node from JSX props.
-}
jsxAttributes : Json.Decoder (List (Html.Attribute msg))
jsxAttributes =
    (Json.field "props"
        (Json.keyValuePairs Json.value
            |> Json.andThen
                (\attrs ->
                    attrs
                        |> List.filter (\( name, _ ) -> name /= "children")
                        |> List.map (\( name, value ) -> property name value)
                        |> Json.succeed
                )
        )
    )


startsWithUpper : String -> Bool
startsWithUpper string =
    String.toUpper (String.left 1 string) == String.left 1 string

module Demo exposing (..)

import Dict
import Json.Decode as Json
import Html exposing (Html, node, text)
import Html.Attributes exposing (property)


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
-- Because we demo our Elm components using the same props as our React components,
-- and because some demos contain arbitrary HTML/JSX nodes, we have a JSON Decoder
-- that turns JSX nodes into Elm Html - using specified component decoders as needed.


type alias JsxNodeInfo msg =
    { name : String
    , attributes : List (Html.Attribute msg)
    , children : NodesAndMessages msg
    }


type alias NodesAndMessages msg =
    ( List (Html msg), List msg )


type alias JsxDecoder msg =
    Json.Decoder (List (Html msg))


type alias JsxWithMessageDecoder msg =
    Json.Decoder (NodesAndMessages msg)



-- TODO
-- Give up on this "with Message" pattern, and have an init function that gives a model instead.


jsxChildren : List ( String, JsxDecoder msg ) -> JsxDecoder msg
jsxChildren simpleComponentDecoders =
    let
        transformDecoder : JsxDecoder msg -> JsxWithMessageDecoder msg
        transformDecoder decoder =
            decoder
                |> Json.andThen (\childList -> Json.succeed ( childList, [] ))

        componentDecoders : List ( String, JsxWithMessageDecoder msg )
        componentDecoders =
            List.map (\( name, decoder ) -> ( name, transformDecoder decoder )) simpleComponentDecoders

        simplifyResult : NodesAndMessages msg -> JsxDecoder msg
        simplifyResult nodesAndMessages =
            Json.succeed (Tuple.first nodesAndMessages)
    in
        jsxChildrenWithMessages componentDecoders
            |> Json.andThen simplifyResult


jsxChildrenWithMessages : List ( String, JsxWithMessageDecoder msg ) -> JsxWithMessageDecoder msg
jsxChildrenWithMessages componentDecoders =
    let
        lazilyRecurse : JsxWithMessageDecoder msg
        lazilyRecurse =
            Json.lazy <| always <| jsxChildrenWithMessages componentDecoders

        flattenChildrenList : List (NodesAndMessages msg) -> JsxWithMessageDecoder msg
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

        createChildNode : JsxNodeInfo msg -> JsxWithMessageDecoder msg
        createChildNode { name, attributes, children } =
            let
                ( childNodes, childMessages ) =
                    children
            in
                case Dict.get name (Dict.fromList componentDecoders) of
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


jsxAttributes : Json.Decoder (List (Html.Attribute msg))
jsxAttributes =
    (Json.field "props"
        (Json.keyValuePairs Json.value
            |> Json.andThen
                (\pairs ->
                    Json.succeed
                        (List.filterMap
                            (\pair ->
                                let
                                    ( attrName, attrValue ) =
                                        pair
                                in
                                    case attrName of
                                        "children" ->
                                            Nothing

                                        _ ->
                                            Just (property attrName attrValue)
                            )
                            pairs
                        )
                )
        )
    )


startsWithUpper : String -> Bool
startsWithUpper string =
    String.toUpper (String.left 1 string) == String.left 1 string

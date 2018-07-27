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



-- JSX DECODERS


type alias JsxNodeInfo msg =
    { name : String
    , attributes : List (Html.Attribute msg)
    , children : List (Html msg)
    }


jsxChildren : List ( String, Json.Decoder (List (Html msg)) ) -> Json.Decoder (List (Html msg))
jsxChildren componentDecoders =
    Json.oneOf
        ([ Json.list
            (Json.lazy (\_ -> (jsxChildren componentDecoders)))
            |> Json.andThen
                (\list ->
                    Json.succeed (List.concat list)
                )
         , Json.map3 JsxNodeInfo
            (Json.field "type" Json.string)
            jsxAttributes
            (Json.at [ "props", "children" ] (Json.lazy (\_ -> (jsxChildren componentDecoders))))
            |> Json.andThen
                (\nodeInfo ->
                    case Dict.get nodeInfo.name (Dict.fromList componentDecoders) of
                        Just componentDecoder ->
                            componentDecoder

                        Nothing ->
                            if startsWithUpper nodeInfo.name then
                                Json.fail ("No decoder was provided for the component " ++ nodeInfo.name)
                            else
                                Json.succeed ([ node nodeInfo.name nodeInfo.attributes nodeInfo.children ])
                )
         , Json.string
            |> Json.andThen (\string -> Json.succeed [ text string ])
         , Json.null [ (text "") ]
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

module Demo exposing (..)

import Dict
import Json.Decode as Json


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

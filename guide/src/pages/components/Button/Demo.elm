port module Button.Demo exposing (..)

import Dict exposing (Dict)
import Html exposing (Html, text)
import Maybe
import Json.Encode
import Json.Decode as Json
import Demo exposing (..)
import Button.Button as Button exposing (..)
import Icon.SvgAsset as SvgAsset


port onClick : () -> Cmd msg


type alias Model =
    Result String ViewArguments


type alias ViewArguments =
    { config : Config Msg
    , label : String
    }


type Msg
    = Click


main : Program Json.Encode.Value Model Msg
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        }


init : Json.Encode.Value -> ( Model, Cmd Msg )
init props =
    ( decode props, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update Click model =
    ( model, onClick () )


decode : Json.Value -> Model
decode props =
    let
        iconPositionDecoder : Json.Decoder IconPosition
        iconPositionDecoder =
            stringEnum
                "not a valid icon position"
                [ ( "start", Start )
                , ( "end", End )
                ]

        iconDecoder : Json.Decoder Icon
        iconDecoder =
            let
                decodeIcon glyph maybePosition maybeNoLabel =
                    let
                        position = Maybe.withDefault Start maybePosition
                        noLabel =  Maybe.withDefault False maybeNoLabel
                    in
                        Icon glyph position noLabel
            in
                Json.map3 decodeIcon
                    (Json.field "glyph" SvgAsset.decoder)
                    (Json.maybe (Json.field "position" iconPositionDecoder))
                    (Json.maybe (Json.field "noLabel" Json.bool))

        brandColorDecoder : Json.Decoder BrandColor
        brandColorDecoder =
            stringEnum
                "not a valid brand color"
                [ ( "lapis", Lapis )
                , ( "ocean", Ocean )
                , ( "peach", Peach )
                , ( "seedling", Seedling )
                , ( "wisteria", Wisteria )
                , ( "yuzu", Yuzu )
                ]
    in
        Ok default
            -- variants
            |> decodeField "primary" Json.bool (variantFlag primary) props
            |> decodeField "secondary" Json.bool (variantFlag secondary) props
            |> decodeField "destructive" Json.bool (variantFlag destructive) props
            -- modifiers
            |> decodeField "disabled" Json.bool disabled props
            |> decodeOptionalField "icon" iconDecoder icon props
            |> decodeField "form" Json.bool form props
            |> decodeField "reversed" Json.bool reversed props
            |> decodeOptionalField "reverseColor" brandColorDecoder reverseColor props
            |> decodeOptionalField "href" Json.string href props
            |> decodeOptionalField "automationId" Json.string automationId props
            |> Result.map (Button.onClick Click)
            -- arguments
            |> Result.map ViewArguments
            |> decodeField "label" Json.string (|>) props


view : Model -> Html Msg
view result =
    case result of
        Ok { config, label } ->
            Button.view config label

        Err message ->
            text ("Props decoding error: " ++ message)

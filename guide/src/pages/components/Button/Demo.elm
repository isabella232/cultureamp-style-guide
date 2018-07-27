port module Button.Demo exposing (..)

import Html exposing (Html, pre, text)
import Json.Encode
import Json.Decode as Json
import Demo exposing (..)
import Button.Button as Button exposing (..)
import Icon.SvgAsset as SvgAsset


port onClick : () -> Cmd msg


type alias Model =
    { node : Json.Value
    }


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
init flags =
    ( { node = flags }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update Click model =
    ( model, onClick () )


buttonDecoder : Json.Decoder (Html Msg)
buttonDecoder =
    let
        iconPositionDecoder : Json.Decoder IconPosition
        iconPositionDecoder =
            stringEnum
                "not a valid icon position"
                [ ( "start", Start )
                , ( "end", End )
                ]

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
        Json.field "props" Json.value
            |> Json.andThen
                (\props ->
                    (Ok (default)
                        -- variants
                        |> decodeField "secondary" Json.bool (variantFlag secondary) props
                        |> decodeField "primary" Json.bool (variantFlag primary) props
                        |> decodeField "destructive" Json.bool (variantFlag destructive) props
                        -- modifiers
                        |> decodeField "disabled" Json.bool disabled props
                        |> decodeOptionalField "icon" SvgAsset.decoder icon props
                        |> decodeField "iconPosition" iconPositionDecoder iconPosition props
                        |> decodeField "form" Json.bool form props
                        |> decodeField "reversed" Json.bool reversed props
                        |> decodeOptionalField "reverseColor" brandColorDecoder reverseColor props
                        |> decodeOptionalField "href" Json.string href props
                        |> decodeOptionalField "automationId" Json.string automationId props
                        |> Result.map (Button.onClick Click)
                        -- arguments
                        |> Result.map ViewArguments
                        |> decodeField "label" Json.string (|>) props
                        -- view
                        |> (\result ->
                                case result of
                                    Ok { config, label } ->
                                        Json.succeed (Button.view config label)

                                    Err msg ->
                                        Json.fail msg
                           )
                    )
                )


view : Model -> Html Msg
view model =
    case Json.decodeValue buttonDecoder model.node of
        Ok html ->
            html

        Err msg ->
            pre [] [ text ("Error decoding Button props: " ++ msg) ]

module Text.Demo exposing (..)

import Html exposing (Html)
import Json.Encode
import Json.Decode as Json
import Demo exposing (..)
import CultureAmp.Text as Text exposing (..)


-- DEMO APP


type alias Model =
    { node : Json.Value
    }


type alias Msg =
    Never


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
    ( { node = flags }
    , Cmd.none
    )


view : Model -> Html Msg
view model =
    viewJsxNodes model.node [ ( "Text", simpleDecoder decodeText ) ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



-- DECODERS


type alias ViewArguments =
    { config : Config Never
    , children : List (Html Never)
    }


decodeText : JsxDecoder Msg
decodeText =
    createPropsToHtmlDecoder
        (\props ->
            Ok (div)
                -- variants
                |> decodeField "tag" tagDecoder (\newConfig prevConfig -> newConfig) props
                -- modifiers
                |> decodeField "style" styleDecoder style props
                |> decodeField "inheritBaseline" Json.bool inheritBaseline props
                -- arguments
                |> Result.map ViewArguments
                |> decodeField "children" htmlJsxChildren (|>) props
                -- view
                |> Result.map (\{ config, children } -> Text.view config children)
         -- view arguments
        )


tagDecoder : Json.Decoder (Config Msg)
tagDecoder =
    stringEnum
        "not a valid HTML text tag"
        [ ( "h1", h1 )
        , ( "h2", h2 )
        , ( "h3", h3 )
        , ( "h4", h4 )
        , ( "h5", h5 )
        , ( "h6", h6 )
        , ( "p", p )
        , ( "div", div )
        , ( "label", label )
        ]


styleDecoder : Json.Decoder TypeStyle
styleDecoder =
    stringEnum
        "not a valid type style"
        [ ( "default-style", DefaultStyle )
        , ( "page-title", PageTitle )
        , ( "title", Title )
        , ( "display", Display )
        , ( "heading", Heading )
        , ( "lede", Lede )
        , ( "body", Body )
        , ( "body-bold", BodyBold )
        , ( "small", Small )
        , ( "small-bold", SmallBold )
        , ( "notification", Notification )
        , ( "label", Label )
        , ( "control-action", ControlAction )
        , ( "button", Button )
        ]

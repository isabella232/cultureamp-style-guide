module Text.Demo exposing (..)

import Html exposing (Html)
import Json.Encode
import Json.Decode as Json
import Demo exposing (..)
import Text.Text as Text exposing (..)


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


decodeText : JsxDecoder Msg
decodeText =
    createPropsToHtmlDecoder
        (\props ->
            Ok (textView)
                -- variant arguments
                |> decodeField "inheritBaseline" Json.bool (variantFlag textViewInheritBaseline) props
                -- view arguments
                |> decodeField "tag" tagDecoder (|>) props
                |> decodeField "style" styleDecoder (|>) props
                |> decodeField "children" htmlJsxChildren (|>) props
        )


tagDecoder : Json.Decoder (List (Html.Attribute Msg) -> List (Html.Html Msg) -> Html Msg)
tagDecoder =
    stringEnum
        "not a valid HTML text tag"
        [ ( "h1", Html.h1 )
        , ( "h2", Html.h2 )
        , ( "h3", Html.h3 )
        , ( "h4", Html.h4 )
        , ( "h5", Html.h5 )
        , ( "h6", Html.h6 )
        , ( "p", Html.p )
        , ( "div", Html.div )
        , ( "label", Html.label )
        ]


styleDecoder : Json.Decoder TypeStyle
styleDecoder =
    stringEnum
        "not a valid ty pe style"
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

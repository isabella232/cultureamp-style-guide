port module Notification.Demo exposing (..)

import Html exposing (Html, text, div, pre)
import Json.Encode
import Json.Decode as Json
import Demo exposing (..)
import Notification.Notification as Notification exposing (..)


port onHide : () -> Cmd msg


type alias Model =
    { node : Json.Value
    , hiddenNotifications : List String
    }


type Msg
    = HideNotification String


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
    ( { node = flags, hiddenNotifications = [] }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update (HideNotification notificationTitle) model =
    ( { model
        | hiddenNotifications = notificationTitle :: model.hiddenNotifications
      }
    , onHide ()
    )


typeDecoder : Json.Decoder NotificationType
typeDecoder =
    stringEnum
        "not a valid notification type"
        [ ( "affirmative", Affirmative )
        , ( "informative", Informative )
        , ( "cautionary", Cautionary )
        , ( "negative", Negative )
        ]


setHideModifiers : List String -> String -> Config Msg -> Config Msg
setHideModifiers hiddenNotifications title oldConfig =
    oldConfig
        |> Notification.hidden (List.member title hiddenNotifications)
        |> Notification.onHide (HideNotification title)


decodeInlineNotification : List String -> Json.Decoder (List (Html Msg))
decodeInlineNotification hiddenNotifications =
    Json.field "props" Json.value
        |> Json.andThen
            (\props ->
                Ok (inline)
                    -- arguments
                    |> decodeField "title" Json.string (|>) props
                    |> decodeField "children" (jsxChildren []) (|>) props
                    |> decodeField "persistent" Json.bool (|>) props
                    -- modifiers
                    |> decodeField "type" typeDecoder notificationType props
                    |> decodeOptionalField "automationId" Json.string automationId props
                    |> decodeField "title" Json.string (setHideModifiers hiddenNotifications) props
                    -- view
                    |> viewFromDecodeResult
            )


decodeToastNotification : List String -> Json.Decoder (List (Html Msg))
decodeToastNotification hiddenNotifications =
    Json.field "props" Json.value
        |> Json.andThen
            (\props ->
                Ok (toast)
                    -- arguments
                    |> decodeField "title" Json.string (|>) props
                    |> decodeField "children" (jsxChildren []) (|>) props
                    -- modifiers
                    |> decodeField "type" typeDecoder notificationType props
                    |> decodeOptionalField "automationId" Json.string automationId props
                    |> decodeField "title" Json.string (setHideModifiers hiddenNotifications) props
                    -- view
                    |> viewFromDecodeResult
            )


decodeGlobalNotification : List String -> Json.Decoder (List (Html Msg))
decodeGlobalNotification hiddenNotifications =
    Json.field "props" Json.value
        |> Json.andThen
            (\props ->
                Ok (global)
                    -- arguments
                    |> decodeField "children" (jsxChildren []) (|>) props
                    -- modifiers
                    |> decodeField "type" typeDecoder notificationType props
                    |> decodeOptionalField "automationId" Json.string automationId props
                    --- Note: I'm using automationId here for our onHide ID. This means that field is required in our GlobalNotification presets.
                    |> decodeField "automationId" Json.string (setHideModifiers hiddenNotifications) props
                    -- view
                    |> viewFromDecodeResult
            )


viewFromDecodeResult : Result String (Config Msg) -> Json.Decoder (List (Html Msg))
viewFromDecodeResult result =
    case result of
        Ok config ->
            Json.succeed ([ Notification.view config ])

        Err msg ->
            Json.fail msg


view : Model -> Html Msg
view model =
    let
        result : Result String (List (Html Msg))
        result =
            Json.decodeValue
                (jsxChildren
                    [ ( "InlineNotification", decodeInlineNotification model.hiddenNotifications )
                    , ( "ToastNotification", decodeToastNotification model.hiddenNotifications )
                    , ( "GlobalNotification", decodeGlobalNotification model.hiddenNotifications )
                    ]
                )
                model.node
    in
        case result of
            Ok result ->
                div [] result

            Err message ->
                pre [] [ text ("Props decoding error: " ++ message) ]

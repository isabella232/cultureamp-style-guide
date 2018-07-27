port module Notification.Demo exposing (..)

import Html exposing (Html, text, div, pre)
import Json.Encode
import Json.Decode as Json
import Demo exposing (..)
import Notification.Notification as Notification exposing (..)
import Dict exposing (Dict)


port onHide : () -> Cmd msg


type alias Model =
    { node : Json.Value
    , notificationStates : Dict String NotificationState
    }


type Msg
    = SetNotificationState String NotificationState


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
    ( { node = flags
      , notificationStates = Dict.fromList []
      }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update (SetNotificationState title state) model =
    ( { model | notificationStates = Dict.insert title state model.notificationStates }
    , case state of
        Hidden ->
            onHide ()

        _ ->
            Cmd.none
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


setStateModifiers : Dict String NotificationState -> String -> Config Msg -> Config Msg
setStateModifiers notificationStates title oldConfig =
    oldConfig
        |> Notification.state (Maybe.withDefault Visible (Dict.get title notificationStates))
        |> Notification.onStateChange (SetNotificationState title)


decodeInlineNotification : Dict String NotificationState -> Json.Decoder (List (Html Msg))
decodeInlineNotification notificationStates =
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
                    |> decodeField "title" Json.string (setStateModifiers notificationStates) props
                    -- view
                    |> viewFromDecodeResult
            )


decodeToastNotification : Dict String NotificationState -> Json.Decoder (List (Html Msg))
decodeToastNotification notificationState =
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
                    |> decodeField "title" Json.string (setStateModifiers notificationState) props
                    -- view
                    |> viewFromDecodeResult
            )


decodeGlobalNotification : Dict String NotificationState -> Json.Decoder (List (Html Msg))
decodeGlobalNotification notificationState =
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
                    |> decodeField "automationId" Json.string (setStateModifiers notificationState) props
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
                    [ ( "InlineNotification", decodeInlineNotification model.notificationStates )
                    , ( "ToastNotification", decodeToastNotification model.notificationStates )
                    , ( "GlobalNotification", decodeGlobalNotification model.notificationStates )
                    ]
                )
                model.node
    in
        case result of
            Ok result ->
                div [] result

            Err message ->
                pre [] [ text ("Props decoding error: " ++ message) ]

port module Notification.Demo exposing (..)

import Html exposing (Html, text, div, pre)
import Json.Encode
import Json.Decode as Json
import Demo exposing (..)
import Notification.Notification as Notification exposing (..)
import Dict exposing (Dict)


-- DEMO APP


port onHide : () -> Cmd msg


type alias Model =
    { node : Json.Value
    , notificationStates : NotificationStates
    }


type Msg
    = SetNotificationState String NotificationState


type alias NotificationStates =
    Dict String NotificationState


main : Program Json.Encode.Value Model Msg
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


init : Json.Encode.Value -> ( Model, Cmd Msg )
init flags =
    let
        -- Because our notifications are read through flags, we don't know which notifications will exist at compile time.
        -- In order to correctly initialise our state management for all notifications, we do an initial pass of the JSX tree.
        -- The second value in the resulting Tuple is a List of messages we can use to initialise our state for each notification.
        initMessages : List Msg
        initMessages =
            Tuple.second (Result.withDefault ( [], [] ) (decode Dict.empty flags))

        initialModel : Model
        initialModel =
            { node = flags
            , notificationStates = Dict.empty
            }

        updateModel : Msg -> Model -> Model
        updateModel msg model =
            Tuple.first (update msg model)
    in
        ( List.foldl updateModel initialModel initMessages
        , Cmd.none
        )


view : Model -> Html Msg
view model =
    let
        result =
            decode model.notificationStates model.node
    in
        case result of
            Ok ( view, messages ) ->
                div [] view

            Err message ->
                pre [] [ text ("Props decoding error: " ++ message) ]


update : Msg -> Model -> ( Model, Cmd Msg )
update (SetNotificationState title state) model =
    ( { model | notificationStates = Dict.insert title state model.notificationStates }
    , case state of
        Hidden ->
            onHide ()

        _ ->
            Cmd.none
    )


subscriptions : Model -> Sub Msg
subscriptions model =
    let
        allNotifications : List ( NotificationState, NotificationState -> Msg )
        allNotifications =
            List.map
                (\( key, state ) -> ( state, SetNotificationState key ))
                (Dict.toList model.notificationStates)
    in
        Notification.subscriptions allNotifications



-- DECODERS


decode : NotificationStates -> Json.Value -> Result String (NodesAndMessages Msg)
decode notificationStates =
    Json.decodeValue
        (jsxChildrenWithMessages
            [ ( "InlineNotification", decodeInlineNotification notificationStates )
            , ( "ToastNotification", decodeToastNotification notificationStates )
            , ( "GlobalNotification", decodeGlobalNotification notificationStates )
            ]
        )


decodeInlineNotification : NotificationStates -> JsxWithMessageDecoder Msg
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
                    |> setStateModifiers notificationStates
                    --  view
                    |> jsxDecoderForConfig
            )


decodeToastNotification : NotificationStates -> JsxWithMessageDecoder Msg
decodeToastNotification notificationStates =
    let
        setAutohide : Bool -> Config Msg -> Config Msg
        setAutohide autohide config =
            let
                currentState =
                    Notification.getState config
            in
                if autohide && (currentState == Appearing) then
                    config |> Notification.state (Autohide Appearing)
                else
                    config
    in
        Json.field "props" Json.value
            |> Json.andThen
                (\props ->
                    Ok (toast)
                        -- arguments
                        |> decodeField "title" Json.string (|>) props
                        |> decodeField "children" (jsxChildren []) (|>) props
                        |> decodeOptionalField "hideCloseIcon" Json.bool (|>) props
                        -- modifiers
                        |> decodeField "type" typeDecoder notificationType props
                        |> decodeOptionalField "automationId" Json.string automationId props
                        |> setStateModifiers notificationStates
                        |> decodeOptionalField "autohide" Json.bool setAutohide props
                        --  view
                        |> jsxDecoderForConfig
                )


decodeGlobalNotification : NotificationStates -> JsxWithMessageDecoder Msg
decodeGlobalNotification notificationStates =
    Json.field "props" Json.value
        |> Json.andThen
            (\props ->
                Ok (global)
                    -- arguments
                    |> decodeField "children" (jsxChildren []) (|>) props
                    -- modifiers
                    |> decodeField "type" typeDecoder notificationType props
                    |> decodeOptionalField "automationId" Json.string automationId props
                    |> setStateModifiers notificationStates
                    -- view
                    |> jsxDecoderForConfig
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


setStateModifiers : NotificationStates -> Result String (Config Msg) -> Result String (Config Msg)
setStateModifiers notificationStates configResult =
    Result.map
        (\config ->
            case Notification.getAutomationId config of
                Just automationId ->
                    -- Use the automationId as a unique key for each notification on the page.
                    -- This means automationId is required in our demo presets, though it is not required normally.
                    config
                        |> Notification.state (Maybe.withDefault Appearing (Dict.get automationId notificationStates))
                        |> Notification.onStateChange (SetNotificationState automationId)

                Nothing ->
                    config
        )
        configResult


jsxDecoderForConfig : Result String (Config Msg) -> JsxWithMessageDecoder Msg
jsxDecoderForConfig result =
    case result of
        Ok config ->
            let
                initialState =
                    Notification.getState config

                -- On the first pass of our JSX we trigger a message so that the notification state is set to Appearing in our model.
                messages =
                    case Notification.getAutomationId config of
                        Just automationId ->
                            [ SetNotificationState automationId initialState ]

                        Nothing ->
                            []
            in
                Json.succeed
                    ( [ Notification.view config ], messages )

        Err msg ->
            Json.fail msg

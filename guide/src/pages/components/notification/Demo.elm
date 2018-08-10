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
update (SetNotificationState automationId state) model =
    ( { model | notificationStates = Dict.insert automationId state model.notificationStates }
    , case notificationStage state of
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
                (\( automationId, state ) -> ( state, SetNotificationState automationId ))
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
                    -- variant arguments
                    |> decodeField "title" Json.string (|>) props
                    |> decodeField "children" (jsxChildren []) (|>) props
                    |> decodeField "persistent" Json.bool (|>) props
                    -- modifiers
                    |> decodeField "type" typeDecoder notificationType props
                    |> decodeOptionalField "automationId" Json.string automationId props
                    -- view
                    |> renderView props notificationStates
            )


decodeToastNotification : NotificationStates -> JsxWithMessageDecoder Msg
decodeToastNotification notificationStates =
    Json.field "props" Json.value
        |> Json.andThen
            (\props ->
                Ok (toast)
                    -- variant arguments
                    |> decodeField "title" Json.string (|>) props
                    |> decodeField "children" (jsxChildren []) (|>) props
                    -- Note: changing the next line to "decodeOptionalField" crashes elm-make. TODO: submit a bug report.
                    |> decodeField "hideCloseIcon" Json.bool (|>) props
                    -- modifiers
                    |> decodeField "type" typeDecoder notificationType props
                    |> decodeOptionalField "automationId" Json.string automationId props
                    -- view
                    |> renderView props notificationStates
            )


decodeGlobalNotification : NotificationStates -> JsxWithMessageDecoder Msg
decodeGlobalNotification notificationStates =
    Json.field "props" Json.value
        |> Json.andThen
            (\props ->
                Ok (global)
                    -- variant arguments
                    |> decodeField "children" (jsxChildren []) (|>) props
                    -- modifiers
                    |> decodeField "type" typeDecoder notificationType props
                    |> decodeOptionalField "automationId" Json.string automationId props
                    -- view
                    |> renderView props notificationStates
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


renderView : Json.Value -> NotificationStates -> Result String (Config Msg) -> JsxWithMessageDecoder Msg
renderView props notificationStates configResult =
    let
        initialState : NotificationState
        initialState =
            case Json.decodeValue (Json.field "autohide" Json.bool) props of
                Ok True ->
                    Autohide Appearing

                _ ->
                    Manual Appearing

        getStateAndConfig : Result String (Config Msg) -> Result String ( Config Msg, NotificationState )
        getStateAndConfig configResult =
            Result.map
                (\config ->
                    -- Use the automationId as a unique key for each notification on the page.
                    -- This means automationId is required in our demo presets, though it is not required normally.
                    case Notification.getAutomationId config of
                        Just automationId ->
                            ( Notification.onStateChange (SetNotificationState automationId) config
                            , Maybe.withDefault initialState (Dict.get automationId notificationStates)
                            )

                        Nothing ->
                            ( config, initialState )
                )
                configResult

        jsxDecoder : Result String ( Config Msg, NotificationState ) -> JsxWithMessageDecoder Msg
        jsxDecoder result =
            case result of
                Ok ( config, currentState ) ->
                    let
                        view =
                            Notification.view config currentState

                        initialMessages =
                            -- On the first pass of our JSX we trigger a message so that the notification state is set to Appearing in our model.
                            case Notification.getAutomationId config of
                                Just automationId ->
                                    [ SetNotificationState automationId initialState ]

                                Nothing ->
                                    []
                    in
                        Json.succeed
                            ( [ view ], initialMessages )

                Err msg ->
                    Json.fail msg
    in
        configResult
            |> getStateAndConfig
            |> jsxDecoder

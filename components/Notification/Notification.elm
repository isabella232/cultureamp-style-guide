module Notification.Notification
    exposing
        ( view
        , inline
        , toast
        , global
        , notificationType
        , state
        , onStateChange
        , automationId
        , Config
        , NotificationType(..)
        , NotificationState(..)
        , getAutomationId
        , getState
        , subscriptions
        )

import Html exposing (Html, text, div, span, h6, p, button)
import Html.Attributes
import Html.Events as Events exposing (on, onWithOptions, defaultOptions)
import Json.Decode as Json
import CssModules exposing (css)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Platform.Sub
import AnimationFrame
import Time exposing (every, second)


-- VIEW


view : Config msg -> Html msg
view (Config config) =
    let
        notificationClass =
            [ classList
                [ ( .notification, True )
                , ( .inline, config.variant == Inline )
                , ( .toast, config.variant == Toast )
                , ( .global, config.variant == Global )
                , ( .affirmative, config.notificationType == Affirmative )
                , ( .informative, config.notificationType == Informative )
                , ( .cautionary, config.notificationType == Cautionary )
                , ( .negative, config.notificationType == Negative )
                , ( .hidden, config.state /= Visible && config.state /= (Autohide Visible) )
                ]
            ]

        style =
            case config.state of
                Disappearing height ->
                    [ Html.Attributes.style [ ( "marginTop", toString (-height) ++ "px" ) ] ]

                _ ->
                    []

        automationId =
            case config.automationId of
                Just id ->
                    [ Html.Attributes.attribute "data-automation-id" id ]

                Nothing ->
                    []

        onTransitionEnd =
            case ( config.state, config.onStateChange ) of
                ( Disappearing _, Just stateChangeMsg ) ->
                    [ on
                        "transitionend"
                        (Json.field "propertyName" Json.string
                            |> Json.andThen
                                (\propertyName ->
                                    if propertyName == "margin-top" then
                                        Json.succeed (stateChangeMsg Hidden)
                                    else
                                        Json.fail "ignore"
                                )
                        )
                    ]

                _ ->
                    []
    in
        case config.state of
            Hidden ->
                text ""

            _ ->
                div (notificationClass ++ style ++ onTransitionEnd)
                    [ viewIcon (Config config)
                    , div [ class .textContainer ]
                        [ viewTitle (Config config)
                        , p [ class .text ] config.content
                        ]
                    , viewCancelButton (Config config)
                    ]


viewIcon : Config msg -> Html msg
viewIcon (Config { notificationType }) =
    let
        iconAsset =
            icon notificationType
    in
        div [ class .icon ]
            [ Icon.view
                (Icon.presentation |> Icon.inheritSize True)
                iconAsset
                |> Html.map never
            ]


icon : NotificationType -> Icon.SvgAsset.SvgAsset
icon type_ =
    case type_ of
        Affirmative ->
            svgAsset "cultureamp-style-guide/icons/success.svg"

        Cautionary ->
            svgAsset "cultureamp-style-guide/icons/exclamation.svg"

        Negative ->
            svgAsset "cultureamp-style-guide/icons/exclamation.svg"

        Informative ->
            svgAsset "cultureamp-style-guide/icons/information.svg"


viewTitle : Config msg -> Html msg
viewTitle (Config { title }) =
    case title of
        Just titleText ->
            h6 [ class .title ] [ text titleText ]

        Nothing ->
            text ""


viewCancelButton : Config msg -> Html msg
viewCancelButton (Config { persistent, state, variant, onStateChange }) =
    let
        -- With Toast Notifications, we only allow hiding the close button if the notification will autohide.
        hideCloseButton =
            case ( variant, state ) of
                ( Toast, Autohide _ ) ->
                    persistent

                ( Toast, _ ) ->
                    False

                ( _, _ ) ->
                    False

        onClickCancel =
            case onStateChange of
                Just stateChangeMsg ->
                    [ onWithOptions
                        "click"
                        { defaultOptions | preventDefault = True }
                        (Json.at [ "target", "parentNode", "clientHeight" ] Json.int
                            |> Json.andThen (\height -> Json.succeed (stateChangeMsg (Disappearing height)))
                        )
                    ]

                Nothing ->
                    []
    in
        if hideCloseButton then
            text ""
        else
            button
                ([ class .cancel ]
                    ++ onClickCancel
                )
                [ span
                    [ class .cancelInner
                    ]
                    [ -- We are using a hidden span and Icon.presentation rather than the usual Icon.img to avoid this components API requiring a unique ID.
                      span [ class .cancelLabel ] [ text "close notification" ]
                    , Icon.view Icon.presentation
                        (svgAsset "cultureamp-style-guide/icons/close.svg")
                        |> Html.map never
                    ]
                ]


{ class, classList } =
    css "cultureamp-style-guide/components/Notification/components/GenericNotification.module.scss"
        { notification = ""
        , icon = ""
        , textContainer = ""
        , title = ""
        , text = ""
        , cancel = ""
        , cancelInner = ""
        , cancelLabel = ""
        , hidden = ""
        , inline = ""
        , toast = ""
        , global = ""
        , affirmative = ""
        , informative = ""
        , cautionary = ""
        , negative = ""
        }



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { variant : Variant
    , notificationType : NotificationType
    , title : Maybe String
    , content : List (Html msg)
    , persistent : Bool
    , state : NotificationState
    , autohide : Bool
    , onStateChange : Maybe (NotificationState -> msg)
    , automationId : Maybe String
    }


type Variant
    = Inline
    | Toast
    | Global


type NotificationType
    = Affirmative
    | Informative
    | Cautionary
    | Negative


type NotificationState
    = Appearing
    | Visible
    | Disappearing Int
    | Hidden
    | Autohide NotificationState


defaults : ConfigValue msg
defaults =
    { variant = Inline
    , notificationType = Informative
    , title = Nothing
    , content = []
    , persistent = False
    , state = Appearing
    , autohide = False
    , onStateChange = Nothing
    , automationId = Nothing
    }



-- VARIANTS


inline : String -> List (Html msg) -> Bool -> Config msg
inline title content persistent =
    Config { defaults | title = Just title, content = content, persistent = persistent }


toast : String -> List (Html msg) -> Bool -> Config msg
toast title content hideCloseIcon =
    Config { defaults | variant = Toast, title = Just title, content = content, persistent = hideCloseIcon }


global : List (Html msg) -> Config msg
global content =
    Config { defaults | variant = Global, content = content }



-- MODIFIERS


notificationType : NotificationType -> Config msg -> Config msg
notificationType value (Config config) =
    Config { config | notificationType = value }


state : NotificationState -> Config msg -> Config msg
state value (Config config) =
    Config { config | state = value }


onStateChange : (NotificationState -> msg) -> Config msg -> Config msg
onStateChange value (Config config) =
    Config { config | onStateChange = Just value }


automationId : String -> Config msg -> Config msg
automationId value (Config config) =
    Config { config | automationId = Just value }



-- HELPERS


getAutomationId : Config msg -> Maybe String
getAutomationId config =
    -- In our Notification.Demo app we need to access the automationId as a way of tracking component states.
    case config of
        Config { automationId } ->
            automationId


getState : Config msg -> NotificationState
getState config =
    -- In our Notification.Demo app we need to access the current state so we can correctly initialise Autohide states
    case config of
        Config { state } ->
            state



-- SUBSCRIPTION


subscriptions : List ( NotificationState, NotificationState -> msg ) -> Sub msg
subscriptions allNotifications =
    Sub.batch
        (List.filterMap
            (\( state, setter ) ->
                case state of
                    Appearing ->
                        Just (AnimationFrame.times (\_ -> setter Visible))

                    Autohide Appearing ->
                        Just (AnimationFrame.times (\_ -> setter (Autohide Visible)))

                    Autohide Visible ->
                        -- TODO: onTransitionStart
                        Just (every (5 * second) (\_ -> setter (Autohide (Disappearing 15))))

                    _ ->
                        Nothing
            )
            allNotifications
        )

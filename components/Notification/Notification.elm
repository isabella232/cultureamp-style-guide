module Notification.Notification
    exposing
        ( view
        , inline
        , toast
        , global
        , notificationType
        , onStateChange
        , automationId
        , Config
        , NotificationType(..)
        , NotificationState(..)
        , getAutomationId
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


type NotificationState
    = Manual NotificationStage
    | Autohide NotificationStage


type NotificationStage
    = Appearing
    | Visible
    | Disappearing Int
    | Hidden



-- VIEW


view : Config msg -> NotificationState -> Html msg
view (Config config) state =
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
                , ( .hidden, (notificationStage state) /= Visible )
                ]
            ]

        marginTopAttr height =
            [ Html.Attributes.style [ ( "marginTop", toString (-height) ++ "px" ) ] ]

        style =
            case notificationStage state of
                Disappearing height ->
                    marginTopAttr height

                _ ->
                    []

        automationId =
            case config.automationId of
                Just id ->
                    [ Html.Attributes.attribute "data-automation-id" id ]

                Nothing ->
                    []

        -- Fetch the correct height for Autohide Disappearing state to animate correctly.
        onTransitionStart =
            case ( state, config.onStateChange ) of
                ( Autohide (Disappearing oldHeight), Just stateChangeMsg ) ->
                    [ on
                        "transitionstart"
                        (Json.at [ "target", "clientHeight" ] Json.int
                            |> Json.andThen
                                (\height ->
                                    if height /= oldHeight then
                                        Json.succeed (stateChangeMsg (Autohide (Disappearing height)))
                                    else
                                        Json.fail "ignore"
                                )
                        )
                    ]

                _ ->
                    []

        onTransitionEnd : List (Html.Attribute msg)
        onTransitionEnd =
            case ( config.onStateChange, notificationStage state ) of
                ( Just stateChangeMsg, Disappearing _ ) ->
                    [ on
                        "transitionend"
                        (Json.field "propertyName" Json.string
                            |> Json.andThen
                                (\propertyName ->
                                    if propertyName == "margin-top" then
                                        Json.succeed (stateChangeMsg (Manual Hidden))
                                    else
                                        Json.fail "ignore"
                                )
                        )
                    ]

                ( _, _ ) ->
                    []
    in
        case notificationStage state of
            Hidden ->
                text ""

            _ ->
                div (notificationClass ++ style ++ onTransitionStart ++ onTransitionEnd)
                    [ viewIcon (Config config)
                    , div [ class .textContainer ]
                        [ viewTitle (Config config)
                        , p [ class .text ] config.content
                        ]
                    , viewCancelButton (Config config) state
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


viewCancelButton : Config msg -> NotificationState -> Html msg
viewCancelButton (Config { persistent, variant, onStateChange }) state =
    let
        -- With Toast Notifications, we only allow hiding the close button if the notification will autohide.
        hideCloseButton =
            case ( variant, state ) of
                ( Toast, Autohide _ ) ->
                    persistent

                ( Toast, _ ) ->
                    False

                ( _, _ ) ->
                    persistent

        onClickCancel =
            case onStateChange of
                Just stateChangeMsg ->
                    [ onWithOptions
                        "click"
                        { defaultOptions | preventDefault = True }
                        (Json.at [ "target", "parentNode", "clientHeight" ] Json.int
                            |> Json.andThen (\height -> Json.succeed (stateChangeMsg (Manual (Disappearing height))))
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


defaults : ConfigValue msg
defaults =
    { variant = Inline
    , notificationType = Informative
    , title = Nothing
    , content = []
    , persistent = False
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
    Config
        { defaults
            | variant = Toast
            , title = Just title
            , content = content
            , persistent = hideCloseIcon
        }


global : List (Html msg) -> Config msg
global content =
    Config { defaults | variant = Global, content = content }



-- MODIFIERS


notificationType : NotificationType -> Config msg -> Config msg
notificationType value (Config config) =
    Config { config | notificationType = value }


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


notificationStage : NotificationState -> NotificationStage
notificationStage state =
    case state of
        Autohide stage ->
            stage

        Manual stage ->
            stage



-- SUBSCRIPTION


subscriptions : List ( NotificationState, NotificationState -> msg ) -> Sub msg
subscriptions allNotifications =
    Sub.batch
        (List.filterMap
            (\( state, setter ) ->
                case state of
                    Manual Appearing ->
                        Just (AnimationFrame.times (\_ -> setter (Manual Visible)))

                    Autohide Appearing ->
                        Just (AnimationFrame.times (\_ -> setter (Autohide Visible)))

                    Autohide Visible ->
                        -- Note: we do not know the height of the notification here, so cannot animate margin-top.
                        -- We have a "transitionstart" event listener that will read the clientHeight and correct this value.
                        Just (every (5 * second) (\_ -> setter (Autohide (Disappearing 0))))

                    _ ->
                        Nothing
            )
            allNotifications
        )

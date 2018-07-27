module Notification.Notification
    exposing
        ( view
        , inline
        , toast
        , global
        , notificationType
        , hidden
        , onHide
        , automationId
        , Config
        , NotificationType(..)
        )

import Html exposing (Html, text, div, span, h6, p, button)
import Html.Attributes
import Html.Events as Events exposing (onWithOptions, defaultOptions)
import Json.Decode as Json
import CssModules exposing (css)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)


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
                , ( .hidden, config.hidden )
                ]
            ]

        automationId =
            case config.automationId of
                Just id ->
                    [ Html.Attributes.attribute "data-automation-id" id ]

                Nothing ->
                    []
    in
        div notificationClass
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
viewCancelButton (Config { persistent, onHide }) =
    let
        onClickCancel =
            case onHide of
                Just msg ->
                    [ onWithOptions
                        "click"
                        { defaultOptions | preventDefault = True }
                        (Json.succeed msg)
                    ]

                Nothing ->
                    []
    in
        if persistent then
            text ""
        else
            button
                ([ class .cancel ]
                    ++ onClickCancel
                )
                [ span
                    [ class .cancelInner
                    ]
                    -- TODO: how do we make sure this ID is unique if multiple notifications are visible? Painful.
                    [ Icon.view (Icon.img "notification-close" "close notification")
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
    , hidden : Bool
    , autohide : Bool
    , onHide : Maybe msg
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
    , hidden = False
    , autohide = False
    , onHide = Nothing
    , automationId = Nothing
    }



-- VARIANTS


inline : String -> List (Html msg) -> Bool -> Config msg
inline title content persistent =
    Config { defaults | title = Just title, content = content, persistent = persistent }


toast : String -> List (Html msg) -> Config msg
toast title content =
    Config { defaults | variant = Toast, title = Just title, content = content }


global : List (Html msg) -> Config msg
global content =
    Config { defaults | variant = Global, content = content }



-- MODIFIERS


notificationType : NotificationType -> Config msg -> Config msg
notificationType value (Config config) =
    Config { config | notificationType = value }


hidden : Bool -> Config msg -> Config msg
hidden value (Config config) =
    Config { config | hidden = value }


onHide : msg -> Config msg -> Config msg
onHide value (Config config) =
    Config { config | onHide = Just value }



-- TODO: See if we can set up autohide using a timer


automationId : String -> Config msg -> Config msg
automationId value (Config config) =
    Config { config | automationId = Just value }

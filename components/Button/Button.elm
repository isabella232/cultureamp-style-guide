module Button.Button
    exposing
        ( view
        , default
        , primary
        , secondary
        , destructive
        , disabled
        , icon
        , iconPosition
        , IconPosition(..)
        , form
        , reversed
        , reverseColor
        , BrandColor(..)
        , onClick
        , href
        , automationId
        , Config
        )

import Html exposing (Html, text, span, button, a)
import Html.Attributes
import Html.Events as Events exposing (onWithOptions, defaultOptions)
import Json.Decode as Json
import CssModules exposing (css)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (SvgAsset)


-- VIEW


view : Config msg -> String -> Html msg
view (Config config) label =
    let
        disabled =
            if config.disabled then
                [ Html.Attributes.disabled True ]
            else
                []

        buttonClass =
            [ classList
                [ ( .button, True )
                , ( .primary, config.variant == Primary )
                , ( .secondary, config.variant == Secondary )
                , ( .destructive, config.variant == Destructive )
                , ( .form, config.form )
                , ( .reversed, config.reversed )
                , ( .reverseColorLapis, config.reverseColor == Just Lapis )
                , ( .reverseColorOcean, config.reverseColor == Just Ocean )
                , ( .reverseColorPeach, config.reverseColor == Just Peach )
                , ( .reverseColorSeedling, config.reverseColor == Just Seedling )
                , ( .reverseColorWisteria, config.reverseColor == Just Wisteria )
                , ( .reverseColorYuzu, config.reverseColor == Just Yuzu )
                ]
            ]

        onClick =
            case config.onClick of
                Just msg ->
                    [ onWithOptions
                        "click"
                        { defaultOptions | preventDefault = True }
                        (Json.succeed msg)
                    ]

                Nothing ->
                    []

        automationId =
            case config.automationId of
                Just id ->
                    [ Html.Attributes.attribute "data-automation-id" id ]

                Nothing ->
                    []
    in
        span [ class .container ]
            [ case config.href of
                Just href ->
                    a ([ Html.Attributes.href href ] ++ buttonClass ++ onClick ++ automationId)
                        [ viewContent (Config config) label |> Html.map never ]

                Nothing ->
                    button (disabled ++ buttonClass ++ onClick ++ automationId)
                        [ viewContent (Config config) label |> Html.map never ]
            ]


viewContent : Config msg -> String -> Html Never
viewContent config label =
    span [ class .content ]
        [ viewIconFor config Start
        , span [ class .label ]
            [ text label ]
        , viewIconFor config End
        ]


viewIconFor : Config msg -> IconPosition -> Html Never
viewIconFor (Config { icon, iconPosition }) forPosition =
    if iconPosition == forPosition then
        case icon of
            Just svgAsset ->
                Icon.view Icon.presentation svgAsset

            Nothing ->
                text ""
    else
        text ""


{ class, classList } =
    css "cultureamp-style-guide/components/Button/Button.module.scss"
        { container = ""
        , button = ""
        , primary = ""
        , secondary = ""
        , destructive = ""
        , form = ""
        , reversed = ""
        , reverseColorLapis = ""
        , reverseColorOcean = ""
        , reverseColorPeach = ""
        , reverseColorSeedling = ""
        , reverseColorWisteria = ""
        , reverseColorYuzu = ""
        , content = ""
        , label = ""
        }



-- VARIANTS


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { variant : Variant
    , icon : Maybe SvgAsset
    , iconPosition : IconPosition
    , disabled : Bool
    , form : Bool
    , reversed : Bool
    , reverseColor : Maybe BrandColor
    , onClick : Maybe msg
    , href : Maybe String
    , automationId : Maybe String
    }


type Variant
    = Default
    | Primary
    | Secondary
    | Destructive


type IconPosition
    = Start
    | End


type BrandColor
    = Lapis
    | Ocean
    | Peach
    | Seedling
    | Wisteria
    | Yuzu


default : Config msg
default =
    Config defaults


defaults : ConfigValue msg
defaults =
    { variant = Default
    , icon = Nothing
    , iconPosition = Start
    , disabled = False
    , form = False
    , reversed = False
    , reverseColor = Nothing
    , onClick = Nothing
    , href = Nothing
    , automationId = Nothing
    }


primary : Config msg
primary =
    Config { defaults | variant = Primary }


secondary : Config msg
secondary =
    Config { defaults | variant = Secondary }


destructive : Config msg
destructive =
    Config { defaults | variant = Destructive }



-- MODIFIERS


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = value }


icon : SvgAsset -> Config msg -> Config msg
icon value (Config config) =
    Config { config | icon = Just value }


iconPosition : IconPosition -> Config msg -> Config msg
iconPosition value (Config config) =
    Config { config | iconPosition = value }


form : Bool -> Config msg -> Config msg
form value (Config config) =
    Config { config | form = value }


reversed : Bool -> Config msg -> Config msg
reversed value (Config config) =
    Config { config | reversed = value }


reverseColor : BrandColor -> Config msg -> Config msg
reverseColor value (Config config) =
    Config { config | reverseColor = Just value }


onClick : msg -> Config msg -> Config msg
onClick value (Config config) =
    Config { config | onClick = Just value }


href : String -> Config msg -> Config msg
href value (Config config) =
    Config { config | href = Just value }


automationId : String -> Config msg -> Config msg
automationId value (Config config) =
    Config { config | automationId = Just value }

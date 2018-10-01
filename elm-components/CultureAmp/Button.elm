module CultureAmp.Button exposing
    ( BrandColor(..)
    , ButtonType(..)
    , Config
    , IconPosition(..)
    , automationId
    , buttonType
    , default
    , destructive
    , destructiveIconButton
    , disabled
    , form
    , href
    , icon
    , iconButton
    , iconPosition
    , onClick
    , primary
    , reverseColor
    , reversed
    , secondary
    , view
    )

import CssModules exposing (css)
import CultureAmp.Icon as Icon
import CultureAmp.SvgAsset exposing (SvgAsset)
import Html exposing (Html, a, button, span, text)
import Html.Attributes
import Html.Attributes.Aria
import Html.Events as Events exposing (defaultOptions, onWithOptions)
import Json.Decode as Json
import Maybe



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
                , ( .iconButton, config.iconButton )
                , ( .reversedIconButton, config.iconButton && config.reversed )
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

        automationId =
            case config.automationId of
                Just id ->
                    [ Html.Attributes.attribute "data-automation-id" id ]

                Nothing ->
                    []

        title =
            if config.iconButton then
                [ Html.Attributes.title label
                , Html.Attributes.Aria.ariaLabel label
                ]

            else
                []

        attribs =
            buttonClass
                ++ onClickAttribs (Config config)
                ++ automationId
                ++ title
                ++ buttonTypeAttribs (Config config)
    in
    span [ class .container ]
        [ case config.href of
            Just href ->
                a (attribs ++ [ Html.Attributes.href href ])
                    [ viewContent (Config config) label |> Html.map never ]

            Nothing ->
                button (attribs ++ disabled)
                    [ viewContent (Config config) label |> Html.map never ]
        ]


onClickAttribs : Config msg -> List (Html.Attribute msg)
onClickAttribs (Config config) =
    case config.onClick of
        Just msg ->
            let
                preventDefault =
                    case config.buttonType of
                        Just buttonType ->
                            case buttonType of
                                Submit ->
                                    False

                                Reset ->
                                    False

                        Nothing ->
                            True
            in
            [ onWithOptions
                "click"
                { defaultOptions | preventDefault = preventDefault }
                (Json.succeed msg)
            ]

        Nothing ->
            []


buttonTypeAttribs : Config msg -> List (Html.Attribute msg)
buttonTypeAttribs (Config config) =
    case config.href of
        Just _ ->
            []

        Nothing ->
            case config.buttonType of
                Just buttonType ->
                    let
                        encodedButtonType =
                            case buttonType of
                                Submit ->
                                    "submit"

                                Reset ->
                                    "reset"
                    in
                    [ Html.Attributes.type_ encodedButtonType ]

                Nothing ->
                    []


viewContent : Config msg -> String -> Html Never
viewContent (Config config) label =
    span [ class .content ]
        [ viewIconFor config Start
        , viewLabel label config.iconButton
        , viewIconFor config End
        ]


viewLabel : String -> Bool -> Html Never
viewLabel label iconButton =
    if iconButton then
        text ""

    else
        span [ class .label ]
            [ text label ]


viewIconFor : ConfigValue msg -> IconPosition -> Html Never
viewIconFor { icon, iconPosition } forPosition =
    if iconPosition == forPosition then
        case icon of
            Just svgAsset ->
                Icon.view Icon.presentation svgAsset

            Nothing ->
                text ""

    else
        text ""


{ class, classList } =
    css "cultureamp-style-guide/components/Button/components/GenericButton.module.scss"
        { container = ""
        , button = ""
        , primary = ""
        , secondary = ""
        , iconButton = ""
        , reversedIconButton = ""
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
    , iconButton : Bool
    , disabled : Bool
    , form : Bool
    , reversed : Bool
    , reverseColor : Maybe BrandColor
    , onClick : Maybe msg
    , href : Maybe String
    , automationId : Maybe String
    , buttonType : Maybe ButtonType
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
    , iconPosition = End
    , iconButton = False
    , disabled = False
    , form = False
    , reversed = False
    , reverseColor = Nothing
    , onClick = Nothing
    , href = Nothing
    , automationId = Nothing
    , buttonType = Nothing
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


iconButton : SvgAsset -> Config msg
iconButton svgAsset =
    Config { defaults | icon = Just svgAsset, iconButton = True }


destructiveIconButton : SvgAsset -> Config msg
destructiveIconButton svgAsset =
    Config { defaults | icon = Just svgAsset, variant = Destructive, iconButton = True }



-- MODIFIERS


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = value }


icon : SvgAsset -> Config msg -> Config msg
icon icon (Config config) =
    Config { config | icon = Just icon }


iconPosition : IconPosition -> Config msg -> Config msg
iconPosition position (Config config) =
    Config { config | iconPosition = position }


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


type ButtonType
    = Submit
    | Reset


buttonType : ButtonType -> Config msg -> Config msg
buttonType value (Config config) =
    Config { config | buttonType = Just value }

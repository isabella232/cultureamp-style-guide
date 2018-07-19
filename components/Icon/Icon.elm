module Icon.Icon
    exposing
        ( Config
        , view
        , presentation
        , img
        , imgWithDesc
        , inheritSize
        )

import Html exposing (Html, text)
import Html.Attributes exposing (attribute)
import Html.Attributes.Aria as Aria exposing (ariaHidden, ariaLabelledby)
import Svg exposing (svg, use)
import Svg.Attributes exposing (class, viewBox, xlinkHref)
import Icon.SvgAsset exposing (SvgAsset, svgAsset)
import CssModules exposing (css)


-- VIEW


view : Config -> SvgAsset -> Html Never
view ((Config { inheritSize, role }) as config) svgAsset =
    let
        { toString } =
            css "cultureamp-style-guide/components/Icon/Icon.module.scss"
                { icon = ""
                , inheritSize = ""
                }
    in
        svg
            (List.append
                [ class
                    -- cannot use Html.Attributes.classList for svg :(
                    ([ ( .icon, True )
                     , ( .inheritSize, inheritSize )
                     ]
                        |> List.filter Tuple.second
                        |> List.map Tuple.first
                        |> List.map toString
                        |> String.join " "
                    )
                , viewBox svgAsset.viewBox
                , attribute "focusable" "false" -- work around IE11 making all SVGs focusable. See http://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-4
                ]
                (a11yAttributes config)
            )
            (List.append
                (a11yElements config)
                [ use [ xlinkHref ("#" ++ svgAsset.id) ] [] ]
            )


a11yAttributes : Config -> List (Html.Attribute Never)
a11yAttributes (Config { role }) =
    case role of
        Presentation ->
            [ Aria.role "presentation"
            , ariaHidden True
            ]

        Img (Id id) _ desc ->
            [ Aria.role "img"
            , ariaLabelledby <|
                case desc of
                    Just _ ->
                        -- read out title and desc together if both are present
                        String.concat [ titleId id, " ", descId id ]

                    Nothing ->
                        titleId id
            ]


a11yElements : Config -> List (Html Never)
a11yElements (Config { role }) =
    case role of
        Img (Id id) (Title title) desc ->
            [ Svg.title [ Html.Attributes.id (titleId id) ] [ text title ]
            , case desc of
                Just (Description str) ->
                    Svg.desc [ Html.Attributes.id (descId id) ] [ text str ]

                Nothing ->
                    text ""
            ]

        Presentation ->
            []


titleId : String -> String
titleId id =
    id ++ "-label"


descId : String -> String
descId id =
    id ++ "-desc"



-- VARIANTS


type Config
    = Config ConfigValue


type alias ConfigValue =
    { inheritSize : Bool
    , role : Role
    }


type Role
    = Img Id Title (Maybe Description)
    | Presentation


type Id
    = Id String


type Title
    = Title String


type Description
    = Description String


defaults : ConfigValue
defaults =
    { inheritSize = False
    , role = Presentation
    }


presentation : Config
presentation =
    Config defaults


img : String -> String -> Config
img id title =
    Config { defaults | role = Img (Id id) (Title title) Nothing }


imgWithDesc : String -> String -> String -> Config
imgWithDesc id title desc =
    Config { defaults | role = Img (Id id) (Title title) (Just (Description desc)) }



-- MODIFIERS


inheritSize : Bool -> Config -> Config
inheritSize value (Config config) =
    Config { config | inheritSize = value }

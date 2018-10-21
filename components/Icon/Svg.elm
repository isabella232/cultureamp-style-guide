module Icon.Svg exposing (Icon(..), fromAsset, toAsset)

import Icon.SvgAsset exposing (SvgAsset, svgAsset)

type Icon
    = Exclamation
    | Information
    | Success
    | Trash
    | Close

pathLookUp : Icon -> String
pathLookUp icon =
    let
        path =
            "cultureamp-style-guide/icons/"

        file =
            case icon of
                Trash ->
                    "trash.svg"

                Success ->
                    "success.svg"

                Exclamation ->
                    "exclamation.svg"

                Information ->
                    "information.svg"

                Close ->
                    "close.svg"

    in
        path ++ file


fromAsset : SvgAsset -> Icon
fromAsset svgAsset =
    Trash


toAsset : Icon -> SvgAsset
toAsset icon =
    svgAsset <| pathLookUp icon


decoder : Json.Decoder Icon
decoder =
    Json.map2 SvgAsset
        (Json.field "id" Json.string)
        (Json.field "viewBox" Json.string)

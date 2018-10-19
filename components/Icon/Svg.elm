module Icon.Svg exposing (Icon, toAsset)

import Icon.SvgAsset exposing (SvgAsset, svgAsset)

type Icon
    = Exclamation
    | Information
    | Success
    | Trash

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

    in
        path ++ file


toAsset : Icon -> SvgAsset
toAsset icon =
    svgAsset <| pathLookUp icon

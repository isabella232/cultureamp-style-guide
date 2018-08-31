module Text.Text
    exposing
        ( textView
        , textViewInheritBaseline
        , h1
        , h2
        , h3
        , h4
        , h5
        , h6
        , p
        , div
        , label
        , TypeStyle(..)
        )

import Html exposing (Html)
import CssModules exposing (css)


{--
Create a text element using the correct semantic HTML tag and the appropriate visual style.

You can use "DefaultStyle" if you want the default visual style for that semantic element.

Examples:

    h1 DefaultStyle [text "This is a h1, styled with page-title (the default)"]

    h1 PageTitle [text "This is a h1, styled with page-title"]

    h1 Display [text "This is a h1, styled with display"]

    p PageTitle [text "This is a p, styled with page-title"]

If you would like to use a different element, use "textView" directly:

    textView Html.aside Lede [text "This is an aside, styled with lede"]

By default, all styles include some relative positioning so that our text sits on a baseline grid.
If you want to inherit the baseline of the parent (no relative positioning), use "textViewInheritBaseline":

    textViewInheritBaseline Html.p DefaultStyle [text "This is an aside, styled as lede"]
--}


type TypeStyle
    = DefaultStyle
    | PageTitle
    | Title
    | Display
    | Heading
    | Paragraph
    | Lede
    | Body
    | BodyBold
    | Small
    | SmallBold
    | Notification
    | Label
    | ControlAction
    | Button


type alias Element msg =
    List (Html.Attribute msg) -> List (Html.Html msg) -> Html.Html msg


textView : Element msg -> TypeStyle -> List (Html.Html msg) -> Html.Html msg
textView tag style children =
    tag [ className tag style False ] children


textViewInheritBaseline : Element msg -> TypeStyle -> List (Html.Html msg) -> Html.Html msg
textViewInheritBaseline tag style children =
    tag [ className tag style True ] children


h1 : TypeStyle -> List (Html.Html msg) -> Html.Html msg
h1 =
    textView Html.h1


h2 : TypeStyle -> List (Html.Html msg) -> Html.Html msg
h2 =
    textView Html.h2


h3 : TypeStyle -> List (Html.Html msg) -> Html.Html msg
h3 =
    textView Html.h3


h4 : TypeStyle -> List (Html.Html msg) -> Html.Html msg
h4 =
    textView Html.h4


h5 : TypeStyle -> List (Html.Html msg) -> Html.Html msg
h5 =
    textView Html.h5


h6 : TypeStyle -> List (Html.Html msg) -> Html.Html msg
h6 =
    textView Html.h6


p : TypeStyle -> List (Html.Html msg) -> Html.Html msg
p =
    textView Html.p


div : TypeStyle -> List (Html.Html msg) -> Html.Html msg
div =
    textView Html.div


label : TypeStyle -> List (Html.Html msg) -> Html.Html msg
label =
    textView Html.label


className : Element msg -> TypeStyle -> Bool -> Html.Attribute msg
className tag typeStyle inheritBaseline =
    let
        styleClass =
            case typeStyle of
                DefaultStyle ->
                    .defaultStyle

                PageTitle ->
                    .pageTitle

                Title ->
                    .title

                Display ->
                    .display

                Heading ->
                    .heading

                Paragraph ->
                    .paragraph

                Lede ->
                    .lede

                Body ->
                    .body

                BodyBold ->
                    .bodyBold

                Small ->
                    .small

                SmallBold ->
                    .smallBold

                Notification ->
                    .notification

                Label ->
                    .label

                ControlAction ->
                    .controlAction

                Button ->
                    .button
    in
        classList
            [ ( styleClass, True )
            , ( .inheritBaseline, inheritBaseline )
            ]


{ classList } =
    css "cultureamp-style-guide/components/Text/Text.module.scss"
        { defaultStyle = ""
        , pageTitle = ""
        , title = ""
        , display = ""
        , heading = ""
        , paragraph = ""
        , lede = ""
        , body = ""
        , bodyBold = ""
        , small = ""
        , smallBold = ""
        , notification = ""
        , label = ""
        , controlAction = ""
        , button = ""
        , inheritBaseline = ""
        }

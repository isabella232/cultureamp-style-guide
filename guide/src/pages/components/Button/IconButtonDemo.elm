port module Button.IconButtonDemo exposing (..)

import Html exposing (Html, div, pre, text)
import Json.Encode
import Json.Decode as Json
import Demo exposing (..)
import CultureAmp.Button as Button exposing (..)
import CultureAmp.SvgAsset as SvgAsset


port onClick : () -> Cmd msg


type alias Model =
    { node : Json.Value
    }


type alias ViewArguments =
    { config : Config Msg
    , label : String
    }


type Msg
    = Click


main : Program Json.Encode.Value Model Msg
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        }


init : Json.Encode.Value -> ( Model, Cmd Msg )
init flags =
    ( { node = flags }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update Click model =
    ( model, onClick () )


iconButtonDecoder : JsxDecoder Msg
iconButtonDecoder =
    let
        setAssetOnIconVariant : SvgAsset.SvgAsset -> (SvgAsset.SvgAsset -> Config Msg) -> Config Msg
        setAssetOnIconVariant svgAsset iconVariant =
            iconVariant svgAsset
    in
        createPropsToHtmlDecoder
            (\props ->
                (Ok iconButton
                    -- variants
                    |> decodeField "destructive" Json.bool (variantFlag destructiveIconButton) props
                    -- add asset to variant
                    |> decodeField "icon" SvgAsset.decoder setAssetOnIconVariant props
                    -- modifiers
                    |> decodeField "disabled" Json.bool disabled props
                    |> decodeField "form" Json.bool form props
                    |> decodeField "reversed" Json.bool reversed props
                    |> decodeOptionalField "href" Json.string href props
                    |> decodeOptionalField "automationId" Json.string automationId props
                    |> Result.map (Button.onClick Click)
                    -- arguments
                    |> Result.map ViewArguments
                    |> decodeField "label" Json.string (|>) props
                    -- view
                    |> Result.map (\{ config, label } -> Button.view config label)
                )
            )


view : Model -> Html Msg
view model =
    case Json.decodeValue iconButtonDecoder model.node of
        Ok buttonHtml ->
            div [] buttonHtml

        Err msg ->
            pre [] [ text ("Error decoding Button props: " ++ msg) ]

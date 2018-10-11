module Icon.Demo exposing (Model, Msg, ViewArguments, decode, init, main, view)

import Browser
import Demo exposing (..)
import Html exposing (Html, text)
import Icon.Icon as Icon exposing (..)
import Icon.SvgAsset as SvgAsset exposing (SvgAsset)
import Json.Decode as Json
import Json.Encode


type alias Model =
    Result String ViewArguments


type alias ViewArguments =
    { config : Config
    , svgAsset : SvgAsset
    }


type alias Msg =
    Never


main : Program Json.Encode.Value Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = \_ model -> ( model, Cmd.none )
        , subscriptions = always Sub.none
        }


init : Json.Encode.Value -> ( Model, Cmd Msg )
init props =
    ( decode props, Cmd.none )


decode : Json.Value -> Model
decode props =
    let
        iconVariantDecoder : Json.Decoder Config
        iconVariantDecoder =
            Json.field "role" Json.string
                |> Json.andThen
                    (\string ->
                        case string of
                            "img" ->
                                Json.map2
                                    (\title maybeDesc ->
                                        case maybeDesc of
                                            Just desc ->
                                                imgWithDesc "icon-demo" title desc

                                            Nothing ->
                                                img "icon-demo" title
                                    )
                                    (Json.field "title" Json.string)
                                    (Json.field "desc" Json.string |> Json.maybe)

                            "presentation" ->
                                Json.succeed presentation

                            _ ->
                                Json.fail ("Error decoding '" ++ string ++ "': not a valid icon role")
                    )
    in
    Ok presentation
        -- variants
        |> decodeAndUpdate iconVariantDecoder always props
        -- -- modifiers
        |> decodeField "inheritSize" Json.bool inheritSize props
        -- arguments
        |> Result.map ViewArguments
        |> decodeField "icon" SvgAsset.decoder (|>) props


view : Model -> Html Msg
view result =
    case result of
        Ok { config, svgAsset } ->
            Icon.view config svgAsset

        Err message ->
            text ("Props decoding error: " ++ message)

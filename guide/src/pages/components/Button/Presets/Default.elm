module Default exposing (main)

import Browser
import Button.Button as Button exposing (..)
import Html exposing (Html, div, text)
import Text.Text as Text exposing (p)


main =
    Browser.sandbox { init = 0, update = update, view = view }


type alias Model =
    Int


type Msg
    = Increment


update : Msg -> Model -> Model
update Increment model =
    model + 1


view : Model -> Html Msg
view model =
    div []
        [ Button.view
            (Button.default |> Button.onClick Increment)
            "Label"
        , Text.view p [ text ("Clicked " ++ String.fromInt model ++ " times") ]
        ]

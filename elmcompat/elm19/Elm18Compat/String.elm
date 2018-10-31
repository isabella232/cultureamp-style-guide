module Elm18Compat.String exposing
    ( fromFloat
    , fromInt
    , toFloat
    , toInt
    )

import String as String19


fromFloat : Float -> String
fromFloat =
    String19.fromFloat


fromInt : Int -> String
fromInt =
    String19.fromInt


toInt : String -> Maybe Int
toInt =
    String19.toInt


toFloat : String -> Maybe Float
toFloat =
    String19.toFloat

/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Feb 2026
 * This program does a cookie clicker game
*/

// variable

// setup
let cookieCount: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// adding cookie points
input.onButtonPressed(Button.A, function () {
  cookieCount = cookieCount + 1
  basic.pause(100)
  basic.showNumber(cookieCount)
})

// Clears score back to 0
input.onButtonPressed(Button.B, function () {
  cookieCount = 0
  basic.showIcon(IconNames.Happy)
  basic.pause(500)
  basic.showNumber(cookieCount)
})

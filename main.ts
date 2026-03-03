/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Feb 2026
 * This program does a cookie clicker game
*/

// setup
let cookies: number = 0
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// adding cookie points
input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Yes)
  pins.digitalWritePin(DigitalPin.P16, 1)
})

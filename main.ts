/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Zhiqin.wei
 * Created on: Jan 2025
 * This program is prize wheel
*/


// Happy face at start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Angry)
    basic.pause(500)
    let randomAngle = Math.randomRange(40, 180)
    basic.showNumber(randomAngle)
    pins.servoWritePin(AnalogPin.P0, randomAngle)
    basic.pause(500)
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function() {
    basic.showIcon(IconNames.Confused)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 3)
    basic.showNumber(0)
    basic.pause(500)
    basic.clearScreen()
})
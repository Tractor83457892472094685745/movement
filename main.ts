radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinRight)
    }
    if (receivedNumber == 3) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
    if (receivedNumber == 2) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinLeft)
    }
    if (receivedNumber == 4) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
})
basic.showLeds(`
    . # . # .
    . . . . .
    # # # # #
    # # # # #
    # . . . #
    `)
radio.setGroup(1)

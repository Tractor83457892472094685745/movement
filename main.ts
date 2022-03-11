radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 103)
    }
    if (receivedNumber == 3) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 103)
    }
    if (receivedNumber == 2) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 103)
    }
    if (receivedNumber == 4) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 101)
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
    }
    if (receivedNumber == 5) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(4)
})
basic.showLeds(`
    . # . # .
    . # . # .
    # . . . #
    # # # # #
    . # # # .
    `)
radio.setGroup(1)

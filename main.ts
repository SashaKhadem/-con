input.onButtonPressed(Button.A, function () {
    radio.sendString("bark")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("ask")
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)

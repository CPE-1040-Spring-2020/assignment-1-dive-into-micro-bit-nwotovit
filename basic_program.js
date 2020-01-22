let iconHeart: boolean = true
input.onButtonPressed(Button.A, function () {

    if (iconHeart) {
        iconHeart = false
    } else {
        iconHeart = true
    }
})

basic.forever(function () {

    if (iconHeart) {

        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Giraffe)
    }
    basic.pause(300)
    basic.clearScreen()
})

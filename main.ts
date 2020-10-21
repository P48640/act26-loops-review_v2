let random = 0
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        random = randint(1, 100)
        basic.showNumber(random)
    }
})

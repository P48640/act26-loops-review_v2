let short = 0
let medium = 0
let tall = 0
let height = 0
let random = 0
let cont_even = 0
let cont_odd = 0
let counter = 0
let angle = 0
let Dice = 0
let Dice_2 = 0
let L = 0
let x = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
    short = 0
    medium = 0
    tall = 0
    for (let index = 0; index < 10; index++) {
        height = randint(100, 200)
        basic.showNumber(height)
        if (height <= 150) {
            basic.showString("Short Person")
            short += 1
        } else if (151 <= height && height <= 170) {
            basic.showString("Medium Person")
            medium += 1
        } else if (height > 171) {
            basic.showString("Tall Person")
            tall += 1
        }
    }
    basic.showString("Short Person")
    basic.showNumber(short)
    basic.showString("Medium Person")
    basic.showNumber(medium)
    basic.showString("Tall Person")
    basic.showNumber(tall)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        random = randint(1, 100)
        basic.showNumber(random)
        if (random % 2 == 0) {
            cont_even += 1
            basic.showString("Even")
        } else {
            cont_odd += 1
            basic.showString("Odd")
        }
    }
    basic.showString("Total Odd:")
    basic.showNumber(cont_even)
    basic.clearScreen()
    basic.showString("Total Even:")
    basic.showNumber(cont_odd)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    counter = 0
    for (let index = 0; index < 10; index++) {
        angle = randint(0, 180)
        basic.showNumber(angle)
        if (angle < 90) {
            basic.showString("Acute")
        } else if (angle == 90) {
            basic.showString("Straight")
        } else if (angle > 90) {
            basic.showString("Obtuse")
            counter += 1
        }
    }
    basic.showString("Total_Obtuse")
    basic.showNumber(counter)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        Dice = randint(1, 6)
        basic.clearScreen()
        Dice_2 = randint(1, 6)
        basic.showNumber(Dice)
        basic.showNumber(Dice_2)
        basic.clearScreen()
    }
    if (Dice != Dice_2) {
        basic.showString("Lose")
        while (L <= 4) {
            L += 1
            basic.showIcon(IconNames.Sad)
            basic.clearScreen()
            basic.pause(500)
        }
    } else {
        basic.showString("Win")
        for (let index = 0; index <= 4; index++) {
            basic.showIcon(IconNames.Happy)
            basic.clearScreen()
            basic.pause(500)
        }
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P2)) {
        x = randint(0, 5)
        y = randint(0, 5)
        led.plot(x, y)
        basic.pause(300)
        if (x == y) {
            music.playMelody("G E F A E B C E ", 120)
        } else {
            music.playTone(698, music.beat(BeatFraction.Whole))
        }
        basic.clearScreen()
    }
})

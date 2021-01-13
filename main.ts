input.onButtonPressed(Button.A, function () {
    Tijt += 100
})
input.onButtonPressed(Button.B, function () {
    Tijt += -100
})
let Tijt = 1000
basic.showLeds(`
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.pause(Tijt)
    soundExpression.hello.play()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(Tijt)
    soundExpression.hello.play()
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
})

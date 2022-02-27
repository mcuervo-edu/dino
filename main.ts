input.onButtonPressed(Button.A, function () {
    dino.set(LedSpriteProperty.Y, 0)
})
function gover () {
    basic.showString("GAME OVER!-Sc:")
    basic.showNumber(score)
    basic.pause(1000)
    control.reset()
}
function live () {
    for (let index = 0; index < 3; index++) {
        dino.set(LedSpriteProperty.Brightness, 0)
        basic.pause(100)
        dino.set(LedSpriteProperty.Brightness, 255)
        basic.pause(100)
    }
    lives += -1
    basic.showNumber(lives)
    if (lives == 0) {
        gover()
    }
}
function newenemy () {
    enemy = game.createSprite(4, randint(2, 3))
    enemy.set(LedSpriteProperty.Brightness, 150)
}
function floor () {
    brick0 = game.createSprite(0, 4)
    brick0.set(LedSpriteProperty.Brightness, 100)
    brick1 = game.createSprite(1, 4)
    brick1.set(LedSpriteProperty.Brightness, 100)
    brick2 = game.createSprite(4, 4)
    brick2.set(LedSpriteProperty.Brightness, 100)
    brick3 = game.createSprite(2, 4)
    brick3.set(LedSpriteProperty.Brightness, 50)
    brick4 = game.createSprite(3, 4)
    brick4.set(LedSpriteProperty.Brightness, 50)
    brick5 = game.createSprite(3, 4)
    brick5.set(LedSpriteProperty.Brightness, 50)
}
let brick5: game.LedSprite = null
let brick4: game.LedSprite = null
let brick3: game.LedSprite = null
let brick2: game.LedSprite = null
let brick1: game.LedSprite = null
let brick0: game.LedSprite = null
let enemy: game.LedSprite = null
let dino: game.LedSprite = null
let score = 0
let lives = 0
let time = 500
let step = 0
lives = 3
score = 0
dino = game.createSprite(1, 3)
floor()
newenemy()
loops.everyInterval(time, function () {
    if (enemy.get(LedSpriteProperty.X) == 0) {
        score += 1
        enemy.delete()
        newenemy()
    } else {
        enemy.change(LedSpriteProperty.X, -1)
    }
    if (enemy.get(LedSpriteProperty.X) == 1) {
        if (dino.get(LedSpriteProperty.Y) == enemy.get(LedSpriteProperty.Y)) {
            live()
        }
    }
    if (step == 0) {
        brick0.set(LedSpriteProperty.X, 0)
        brick1.set(LedSpriteProperty.X, 1)
        brick2.set(LedSpriteProperty.X, 4)
        brick3.set(LedSpriteProperty.X, 2)
        brick4.set(LedSpriteProperty.X, 3)
    } else if (step == 1) {
        brick0.set(LedSpriteProperty.X, 0)
        brick1.set(LedSpriteProperty.X, 3)
        brick2.set(LedSpriteProperty.X, 4)
        brick3.set(LedSpriteProperty.X, 1)
        brick4.set(LedSpriteProperty.X, 2)
    } else if (step == 2) {
        brick0.set(LedSpriteProperty.X, 2)
        brick1.set(LedSpriteProperty.X, 3)
        brick3.set(LedSpriteProperty.X, 0)
        brick4.set(LedSpriteProperty.X, 1)
        brick5.set(LedSpriteProperty.X, 4)
    } else if (step == 3) {
        brick0.set(LedSpriteProperty.X, 1)
        brick1.set(LedSpriteProperty.X, 2)
        brick3.set(LedSpriteProperty.X, 0)
        brick4.set(LedSpriteProperty.X, 3)
        brick5.set(LedSpriteProperty.X, 4)
        step = 0
    }
    step += 1
})
basic.forever(function () {
    if (dino.get(LedSpriteProperty.Y) < 3) {
        dino.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (score % 25 == 0) {
        time += -5
    }
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mysprite2.setPosition(0, 0)
    mysprite2.follow(mySprite, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 60, 30)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 200, 100)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    mysprite2.setPosition(0, 0)
    mysprite2.follow(mySprite, 50)
})
let mysprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 1 1 2 2 1 1 2 2 2 2 2 2 
    2 2 2 2 1 f 2 2 1 f 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
mySprite.setPosition(160, 60)
mysprite2 = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 1 1 7 7 1 1 7 7 7 7 7 7 
    7 7 7 7 1 f 7 7 1 f 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Enemy)
mysprite2.setPosition(160, 0)
controller.moveSprite(mySprite, 200, 100)
mySprite.setVelocity(-50, 0)
mysprite2.follow(mySprite, 50)

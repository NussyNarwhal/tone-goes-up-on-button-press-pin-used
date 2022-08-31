input.onPinPressed(TouchPin.P0, function () {
    sound = sound + 100
    music.playTone(sound, music.beat(BeatFraction.Whole))
})
let sound = 0
sound = 600

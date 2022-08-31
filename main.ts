input.onPinPressed(TouchPin.P0, function () {
    sound = sound + 100
    music.playTone(sound, music.beat(BeatFraction.Whole))
})
let sound = 0
sound = 600
basic.forever(function () {
    music.playMelody("- - - A B A F A ", 120)
})

class Speaker {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    display() {
        console.log("Color: " + this.color);
        console.log("Volume: " + this.volume);
    }
    play() {
        console.log("Playing....");
    }
    pause() {
        console.log("Pausing....");
    }
    sound() {
        console.log("Make Some Sound....");
    }
}
export default Speaker;

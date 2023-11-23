class Flashlight {
    constructor(color, height, lightPower, batteriesNum) {
        this.color = color;
        this.height = height;
        this.lightPower = lightPower;
        this.batteriesNum = batteriesNum;
    }
    display() {
        console.log("Color: " + this.color);
        console.log("Height: " + this.height);
        console.log("Light Power: " + this.lightPower);
        console.log("Number Of Batteries: " + this.batteriesNum);
    }
    on() {
        console.log("On....");
    }
    off() {
        console.log("Off....");
    }
    changeBatteries() {
        console.log("Changing Batteries....");
    }
}
export default Flashlight;

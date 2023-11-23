import MusicalInstruments from "./MusicalInstruments.js";
class Drum extends MusicalInstruments {
    constructor(model, manufacturer, color, diameter) {
        super(model, manufacturer, color);
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
        this.diameter = diameter;
    }
    test() {
        console.log("Testing a drum..");
    }
    tune() {
        console.log("Tuning a drum..");
    }
    display() {
        super.display();
        console.log("Diameter: " + this.diameter);
    }
    makeSound() {
        console.log("Making Drum Sound...");
    }
}
export default Drum;

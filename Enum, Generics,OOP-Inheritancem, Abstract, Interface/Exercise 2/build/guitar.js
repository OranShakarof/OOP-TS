import MusicalInstruments from "./MusicalInstruments.js";
class Guitar extends MusicalInstruments {
    constructor(model, manufacturer, color, stringsNumber) {
        super(model, manufacturer, color);
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
        this.stringsNumber = stringsNumber;
    }
    test() {
        console.log("Testing a guitar..");
    }
    tune() {
        console.log("Tuning a guitar..");
    }
    display() {
        super.display();
        console.log("Strings Number: " + this.stringsNumber);
    }
    makeSound() {
        console.log("Making Guitar Sound...");
    }
}
export default Guitar;

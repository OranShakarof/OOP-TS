import MusicalInstruments from "./MusicalInstruments.js";
class Piano extends MusicalInstruments {
    constructor(model, manufacturer, color, keyboards) {
        super(model, manufacturer, color);
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
        this.keyboards = keyboards;
    }
    test() {
        console.log("Testing a Piano....");
    }
    tune() {
        console.log("Tuning a Piano");
    }
    display() {
        super.display();
        console.log("Number Of Keyboards: " + this.keyboards);
    }
    makeSound() {
        console.log("Making Piano Sound...");
    }
}
export default Piano;

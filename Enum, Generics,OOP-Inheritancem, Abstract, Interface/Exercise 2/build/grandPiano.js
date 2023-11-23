import Piano from "./piano.js";
class GrandPiano extends Piano {
    constructor(model, manufacturer, color, keyboards, height) {
        super(model, manufacturer, color, keyboards);
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
        this.keyboards = keyboards;
        this.height = height;
    }
    display() {
        super.display();
        console.log("Height: " + this.height);
    }
    makeSound() {
        console.log("Making Piano Sound...");
    }
}
export default GrandPiano;

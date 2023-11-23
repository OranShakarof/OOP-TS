class Car {
    constructor(carNumber, manufacturer, model, color, engineCapacity) {
        this.carNumber = carNumber;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.engineCapacity = engineCapacity;
    }
    display() {
        console.log("Car Number: " + this.carNumber);
        console.log("Manufacturer: " + this.manufacturer);
        console.log("Model: " + this.model);
        console.log("Color: " + this.color);
        console.log("Engine Capacity: " + this.engineCapacity);
    }
}
export default Car;

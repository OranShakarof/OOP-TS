import Car from "./car.js";
class SportCar extends Car {
    constructor(carNumber, manufacturer, model, color, engineCapacity, maxSpeed, countOfRaces) {
        super(carNumber, manufacturer, model, color, engineCapacity);
        this.carNumber = carNumber;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.engineCapacity = engineCapacity;
        this.maxSpeed = maxSpeed;
        this.countOfRaces = countOfRaces;
    }
    display() {
        super.display();
        console.log("Max Speed: " + this.maxSpeed);
        console.log("Number Of Races participated: " + this.countOfRaces);
    }
}
export default SportCar;

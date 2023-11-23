class Car {

    public carNumber: number;
    public manufacturer: string;
    public model: string;
    public color: string;
    public engineCapacity : number;

    public constructor(carNumber: number, manufacturer: string, model: string, color: string, engineCapacity: number) {
        this.carNumber = carNumber;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.engineCapacity = engineCapacity;
    }

    public display(){
        console.log("Car Number: " + this.carNumber);
        console.log("Manufacturer: " + this.manufacturer);
        console.log("Model: " + this.model);
        console.log("Color: " + this.color);
        console.log("Engine Capacity: " + this.engineCapacity);
    }

}

export default Car;
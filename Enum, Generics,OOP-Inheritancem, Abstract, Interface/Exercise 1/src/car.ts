class Car {

    public constructor(public readonly carNumber: number, public manufacturer: string, public model: string, public color: string, public engineCapacity: number) {
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
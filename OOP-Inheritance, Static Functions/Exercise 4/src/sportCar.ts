import Car from "./car.js";

class SportCar extends Car {
  public maxSpeed: number;
  public countOfRaces: number;

  public constructor(
    carNumber: number,
    manufacturer: string,
    model: string,
    color: string,
    engineCapacity: number,
    maxSpeed: number,
    countOfRaces: number
  ) {
    super(carNumber, manufacturer, model, color, engineCapacity);
    this.maxSpeed = maxSpeed;
    this.countOfRaces = countOfRaces;
  }

  public display(): void {
      super.display();
      console.log("Max Speed: " + this.maxSpeed);
      console.log("Number Of Races participated: " + this.countOfRaces);
      
  }
}

export default SportCar;

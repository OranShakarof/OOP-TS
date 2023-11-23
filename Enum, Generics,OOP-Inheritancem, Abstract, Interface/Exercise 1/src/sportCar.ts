import Car from "./car.js";

class SportCar extends Car {

  public constructor(
    public carNumber: number,
    public manufacturer: string,
    public model: string,
    public color: string,
    public engineCapacity: number,
    public maxSpeed: number,
    public countOfRaces: number
  ) {
    super(carNumber, manufacturer, model, color, engineCapacity);
  }

  public display(): void {
      super.display();
      console.log("Max Speed: " + this.maxSpeed);
      console.log("Number Of Races participated: " + this.countOfRaces);
      
  }
}

export default SportCar;

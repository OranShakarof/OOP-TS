import MusicalInstruments from "./MusicalInstruments.js";

class Drum extends MusicalInstruments implements Tester {
  public constructor(
    public model: string,
    public manufacturer: string,
    public color: string,
    public diameter: number
  ) {
    super(model, manufacturer, color);
  }
  test(): void {
    console.log("Testing a drum..");
  }
  tune(): void {
    console.log("Tuning a drum..");
  }

  public display(): void {
    super.display();
    console.log("Diameter: " + this.diameter);
  }

  makeSound(): void {
    console.log("Making Drum Sound...");
  }
}

export default Drum;

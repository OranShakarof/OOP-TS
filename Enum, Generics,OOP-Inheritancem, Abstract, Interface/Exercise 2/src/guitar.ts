import MusicalInstruments from "./MusicalInstruments.js";

class Guitar extends MusicalInstruments implements Tester {
  public constructor(
    public model: string,
    public manufacturer: string,
    public color: string,
    public stringsNumber: number
  ) {
    super(model, manufacturer, color);
  }
  test(): void {
    console.log("Testing a guitar..");
  }
  tune(): void {
    console.log("Tuning a guitar..");
  }

  public display(): void {
    super.display();
    console.log("Strings Number: " + this.stringsNumber);
  }

  makeSound(): void {
    console.log("Making Guitar Sound...");
  }
}

export default Guitar;

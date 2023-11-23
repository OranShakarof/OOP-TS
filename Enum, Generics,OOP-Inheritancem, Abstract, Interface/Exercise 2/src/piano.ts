import MusicalInstruments from "./MusicalInstruments.js";

class Piano extends MusicalInstruments implements Tester {
  public constructor(
    public model: string,
    public manufacturer: string,
    public color: string,
    public keyboards: number
  ) {
    super(model, manufacturer, color);
  }
    test(): void {
        console.log("Testing a Piano....");
    }
    tune(): void {
        console.log("Tuning a Piano");
    }

  public display(): void {
    super.display();
    console.log("Number Of Keyboards: " + this.keyboards);
  }

  makeSound(): void {
    console.log("Making Piano Sound...");
  }
}

export default Piano;

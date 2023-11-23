import MusicalInstruments from "./MusicalInstruments.js";
import Piano from "./piano.js";

class GrandPiano extends Piano implements Tester {
  public constructor(
    public model: string,
    public manufacturer: string,
    public color: string,
    public keyboards: number,
    public height: number
  ) {
    super(model, manufacturer, color, keyboards);
  }

  public display(): void {
    super.display();
    console.log("Height: " + this.height);
  }

  makeSound(): void {
    console.log("Making Piano Sound...");
  }
}

export default GrandPiano;

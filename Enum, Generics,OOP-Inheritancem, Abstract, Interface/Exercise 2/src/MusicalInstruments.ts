abstract class MusicalInstruments {
  constructor(
    public model: string,
    public manufacturer: string,
    public color: string
  ) {}

  public display(): void {
    console.log("Model: " + this.model);
    console.log("Manufacturer: " + this.manufacturer);
    console.log("Manufacturer: " + this.color);
  }

   abstract makeSound():void;

}

export default MusicalInstruments;

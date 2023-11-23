class Flashlight{
    public color: string;
    public height: number;
    public lightPower: number;
    public batteriesNum: number;

    public constructor(color: string, height: number, lightPower: number, batteriesNum: number){
        this.color = color;
        this.height = height;
        this.lightPower = lightPower;
        this.batteriesNum = batteriesNum;
    }

    public display(): void {
        console.log("Color: " + this.color);
        console.log("Height: " + this.height);
        console.log("Light Power: " + this.lightPower);
        console.log("Number Of Batteries: " + this.batteriesNum);
    }

    public on(): void {
        console.log("On....");    
    }

    public off(): void {
        console.log("Off....");    
    }

    public changeBatteries(): void {
        console.log("Changing Batteries....");    
    }
}

export default Flashlight;
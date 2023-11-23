class Speaker{
    public color: string;
    public volume: number;

    public constructor(color: string, volume: number){
        this.color = color;
        this.volume = volume;
    }

    public display(): void {
        console.log("Color: " + this.color);
        console.log("Volume: " + this.volume);
    }

    public play(): void {
        console.log("Playing....");    
    }

    public pause(): void {
        console.log("Pausing....");    
    }

    public sound(): void {
        console.log("Make Some Sound....");    
    }
}

export default Speaker;
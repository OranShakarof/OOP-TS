import Color from "./color.js";




function getColorItem(color: string): void{
    switch(color){
        case "Blue":
            console.log("Sky");
            break;
        case "White":
            console.log("Snow");
            break;
        case "Red":
            console.log("Tomato");
            break;
        case "Yellow": 
            console.log("Banana");
            break;
        case "Pink": 
            console.log("BubbleGum");
            break;
    }
}
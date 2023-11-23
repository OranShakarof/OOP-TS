import Car from "./car.js";
import SportCar from "./sportCar.js";


const car = new Car(53212341, "Mazda", "CX5", "Black", 150);
car.display();
console.log("----------------------------------");


const sportCar = new SportCar(1442303, "Ferrari", "Spider", "Red", 650, 400, 9);
sportCar.display();

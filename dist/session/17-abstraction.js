"use strict";
/**
 * abstraction :
 * abstract class ke inherite kora jai but instance kora jai nah
 */
// abstract 
class Car {
}
class MyCar extends Car {
    start() {
        console.log("Car Starting... ");
    }
    stop() {
        console.log("Car stoped...");
    }
}
const car1 = new MyCar();
car1.start();

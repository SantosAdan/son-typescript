/// <reference path="iCar" />
var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.getCar = function () {
        return console.log(this.name, this.color, this.power);
    };
    return Car;
}());
/// <reference path="Car" />
var porsche = new Car("Porsche", "Red", 460);
porsche.getCar();
// tsc main.ts --out main.js -w 

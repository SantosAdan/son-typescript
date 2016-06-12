/// <reference path="iCar" />

class Car implements iCar {
    constructor(
        public name:string,
        public color:string,
        public power:number
    ) {};

    getCar():void {
        return console.log(this.name, this.color, this.power);
    }
}
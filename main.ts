interface iCountString {
    valueTxt: string;
    countTxt():number;
}

class Mytext implements iCountString {
    constructor(public valueTxt:string){};

    countTxt():number {
        return this.valueTxt.length;
    };
}

var t = new Mytext("Adan Recarlos...");
console.log(t.countTxt());

// ---------------------------------- Duas Interfaces
interface iPrintString {
    print(value:string):void;
}

class Mytext2 implements iCountString, iPrintString {
    constructor(public valueTxt:string){};

    countTxt():number {
        return this.valueTxt.length;
    };

    print(value:string):void {
        console.log('Text: ' + value);
    }
}
var t2 = new Mytext2("Adan");
t2.print('Test');

// ------------------------------ Herança
interface iCarString {
    name:string;
    getCar():string;
}

interface iCarColor {
    color:string;
    getColor():string;
}

interface iCar extends iCarString, iCarColor{
    power:number;
    getPower():number;
}

class Car implements iCar {
    constructor(public name: string, public color: string, public power: number){};

    getCar():string {
        return this.name;
    }

    getColor():string {
        return this.color;
    }

    getPower():number {
        return this.power;
    }
}
var camaro = new Car("Camaro", "Yellow", 460);
console.log(camaro.getCar(), camaro.getColor(), camaro.getPower());
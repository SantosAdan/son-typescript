// ----------------------------------------- Public Attributes
class Car {
    constructor(
        public name: string,
        public color: string,
        public power: number
    ){};

    printCar():void {
        console.log(this.name, this.color, this.power);
    }
}
var camaro = new Car("Camaro", "Yellow", 450);
camaro.printCar();

// ----------------------------------------- Private Attributes
class Car2 {
    private _name: string;
    private _color: string;
    private _power: number;

    constructor(name:string, color:string, power:number){
        this._name = name;
        this._color = color;
        this._power = power;
    };
}
var ferrari = new Car2("Ferrari", "Red", 480);
//ferrari._name = "Corsa";
console.log(ferrari);

// ----------------------------------------- Static Attributes
class Car3 {
    private _name: string;
    private _color: string;
    private _power: number;
    public static list:Array<string> = [];

    constructor(name:string, color:string, power:number){
        this._name = name;
        this._color = color;
        this._power = power;
        Car3.list.push(name);
    };

    get name():string {
        return this._name;
    }

    set name(value:string):void {
        this._name = value;
    }
}
var porshe = new Car3("Porshe", "Black", 510);
console.log(porshe);
porshe.name = "Porshezão";
var shelby = new Car3("Shelby", "Navy Blue", 460);
console.log(porshe);
console.log(Car3.list);
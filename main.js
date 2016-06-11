// ----------------------------------------- Public Attributes
var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.printCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car;
}());
var camaro = new Car("Camaro", "Yellow", 450);
camaro.printCar();
// ----------------------------------------- Private Attributes
var Car2 = (function () {
    function Car2(name, color, power) {
        this._name = name;
        this._color = color;
        this._power = power;
    }
    ;
    return Car2;
}());
var ferrari = new Car2("Ferrari", "Red", 480);
//ferrari._name = "Corsa";
console.log(ferrari);
// ----------------------------------------- Static Attributes
var Car3 = (function () {
    function Car3(name, color, power) {
        this._name = name;
        this._color = color;
        this._power = power;
        Car3.list.push(name);
    }
    ;
    Object.defineProperty(Car3.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Car3.list = [];
    return Car3;
}());
var porshe = new Car3("Porshe", "Black", 510);
console.log(porshe);
porshe.name = "Porshezão";
var shelby = new Car3("Shelby", "Navy Blue", 460);
console.log(porshe);
console.log(Car3.list);

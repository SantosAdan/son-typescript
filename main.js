var Mytext = (function () {
    function Mytext(valueTxt) {
        this.valueTxt = valueTxt;
    }
    ;
    Mytext.prototype.countTxt = function () {
        return this.valueTxt.length;
    };
    ;
    return Mytext;
}());
var t = new Mytext("Adan Recarlos...");
console.log(t.countTxt());
var Mytext2 = (function () {
    function Mytext2(valueTxt) {
        this.valueTxt = valueTxt;
    }
    ;
    Mytext2.prototype.countTxt = function () {
        return this.valueTxt.length;
    };
    ;
    Mytext2.prototype.print = function (value) {
        console.log('Text: ' + value);
    };
    return Mytext2;
}());
var t2 = new Mytext2("Adan");
t2.print('Test');
var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.getCar = function () {
        return this.name;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.getPower = function () {
        return this.power;
    };
    return Car;
}());
var camaro = new Car("Camaro", "Yellow", 460);
console.log(camaro.getCar(), camaro.getColor(), camaro.getPower());

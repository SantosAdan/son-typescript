var test = false;
var id = 2;
// ------------------------------------- Numbers
var decimal = 5.5;
var hex = 0xf00d;
var binary = 2;
var octal = 484;
// ------------------------------------- Strings
var name = "Adan";
var car = 'Camaro';
var text = "<p>Name: " + name + "</p>\n                               <p>Car: " + car + "</p>";
document.body.innerHTML = text;
// ------------------------------------- Array
var fruits = ["Apple", "Watermelon", "Lemon"];
console.log(fruits);
var fruits = ["Apple", "Watermelon", "Lemon"];
console.log(fruits);
// ------------------------------------- Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red);
console.log(Color[2]);
// ------------------------------------- Any
var list = 23;
console.log(list);
list = "String...";
console.log(list);
// ------------------------------------- Void
function printNumber(num) {
    alert(num);
}
printNumber(32);

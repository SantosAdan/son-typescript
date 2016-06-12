var listCar = ["Camaro", "Ferrari", "Porsche"];

// JS
for(var i in listCar) {
    console.log(i);
}

// TS
for(var car of listCar) {
    console.log(car);
}

var colors = new Array(["Red", "Green", "Blue"]);
colors['title'] = "Colors";

// JS
for(var i in colors) {
    console.log(i);
}

// TS
for(var color of colors) {
    console.log(color);
}
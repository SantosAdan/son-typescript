
var test: boolean = false;
var id: number = 2;

// ------------------------------------- Numbers
var decimal: number = 5.5;
var hex: number = 0xf00d;
var binary: number = 0b10;
var octal: number = 0o744;

// ------------------------------------- Strings
var name: string = "Adan";
var car: string = 'Camaro';
var text: string = `<p>Name: ${name}</p>
                               <p>Car: ${car}</p>`;
document.body.innerHTML = text;

// ------------------------------------- Array
var fruits: string[] = ["Apple", "Watermelon", "Lemon"];
console.log(fruits);
var fruits: Array<string> = ["Apple", "Watermelon", "Lemon"];
console.log(fruits);

// ------------------------------------- Enum
enum Color {Red = 1, Green, Blue};
console.log(Color.Red);
console.log(Color[2]);

// ------------------------------------- Any
var list: any = 23;
console.log(list);

list = "String...";
console.log(list);

// ------------------------------------- Void
function printNumber(num:number):void {
    alert(num);
}
printNumber(32);
// ------------------------ Interface for functions
interface iPerson {
    name:string;
    age:number;
}

function person (value:iPerson):void {
    console.log(value);
}
person({name:"Adan", age:22});

// ------------------------ Interface for function return
function person2 (name:string, age:number):iPerson {
    return {name: name, age: age};
}
console.log(person2("Recarlos", 22));

// ------------------------ Interface with optional attributes
interface iColor {
    title?:string;
    codeColor:string;
}

function getColor(codeColor:string, title?:string):iColor { // Os atributos opcionais devem vir no fim da declaração de parâmetros
    if(title)
        return {title: title, codeColor: codeColor};

    return {codeColor: codeColor};
}
console.log(getColor("#000"));
console.log(getColor("Black", "#000"));
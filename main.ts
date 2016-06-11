// ---------------------------- Interface for functions
interface iTypeFunc {
    (a:number, b:number):boolean;
}

var add: iTypeFunc;
add = function (varA:number, varB:number):boolean {
    return true;
}

// ------------------------------------------
interface iColor {
    (codeColor:string, title?:string):{codeColor:string, title?:string};
}

var getColor: iColor;
getColor = function (codeColor:string, title?:string):{codeColor:string, title?:string} {
    if(title)
        return {codeColor:codeColor, title:title};
    return {codeColor:codeColor};
}

console.log(getColor("#fff", "White"));

// ------------------------------------------- Interface for array
interface iArrayTypes {
    [index:number]:string;
}

var a: iArrayTypes;
a = ["test", 65];
console.log(a);
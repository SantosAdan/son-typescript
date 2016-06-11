function person(value) {
    console.log(value);
}
person({ name: "Adan", age: 22 });
// ------------------------ Interface for function return
function person2(name, age) {
    return { name: name, age: age };
}
console.log(person2("Recarlos", 22));
function getColor(codeColor, title) {
    if (title)
        return { title: title, codeColor: codeColor };
    return { codeColor: codeColor };
}
console.log(getColor("#000"));
console.log(getColor("Black", "#000"));

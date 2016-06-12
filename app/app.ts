// tsc app/app.ts --out js/app.js -w
/// <reference path="src/Product.ts" />

module App {
    var product = new Product('Book', 'Code Book', 99.99);
    console.log(product);
    document.getElementById('app').innerHTML = `
    <div>
        <ul>
            <li>${product.name} - ${product.description} - R$ ${product.value}</li>
        </ul>
    </div>
    `;
}
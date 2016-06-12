/// <reference path="iProduct.ts" />
var App;
(function (App) {
    var Product = (function () {
        function Product(name, description, value) {
            this.name = name;
            this.description = description;
            this.value = value;
        }
        ;
        return Product;
    }());
    App.Product = Product;
})(App || (App = {}));
// tsc app/app.ts --out js/app.js -w
/// <reference path="src/Product.ts" />
var App;
(function (App) {
    var product = new App.Product('Book', 'Code Book', 99.99);
    console.log(product);
    document.getElementById('app').innerHTML = "\n    <div>\n        <ul>\n            <li>" + product.name + " - " + product.description + " - R$ " + product.value + "</li>\n        </ul>\n    </div>\n    ";
})(App || (App = {}));

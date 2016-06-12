/// <reference path="iProduct.ts" />

module App {
    export class Product implements iProduct {
        constructor(
            public name: string,
            public description: string,
            public value: number
        ){};
    }
}
module App {
    export interface iCar {
        name: string;
    }
}

module App {
    class Car implements iCar {
        name: string;
        color: string;
    }

    var mustang = new Car();

    console.log(mustang);
}
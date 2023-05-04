const Dealership = require('./dealership');
const Car = require('./car');

const carCentre = new Dealership ("Car Centre", 30, null);
const bentley = new Car("bentley outlet", 500, "manual");
const audi = new Car("audi outlet", 300, "automatic");
const bmw = new Car("bmw outlet", 200, "manual");
const bmwTURBO = new Car("bmw outlet", 700, "manual");
const bmwTURBOextra = new Car("bmw outlet", 1100, "manual");

describe('adding cars - dealership functionality', () => {

    test.skip("can add car to carStock", () => {
        carCentre.addCar(bentley);

        expected = [bentley];
        actual = carCentre.carStock;

        expect(actual).toEqual(expected);
    });

    test.skip('can add multiple cars to carStock', ()=> {
        carCentre.addCar(bentley);
        carCentre.addCar(audi);

        const expected = [bentley, audi];
        const actual = carCentre.carStock;

        expect(actual).toEqual(expected)
    });
})


describe('counting cars - dealership functionality', () => {
    test.skip('can count cars in car stock', ()=> {
        carCentre.addCar(bentley);
        carCentre.addCar(audi);

        const expected = 2;
        const actual = carCentre.carStock.length;

        expect(actual).toEqual(expected)
    });
})
describe('manufacturer list - dealership functionality', () => {
    test.skip('can return list of all the car manufacturers', ()=> {

        const expected = ["bmw outlet", "audi outlet", " bentley outlet"];
        const actual = carCentre.returnManufacturers;

        expect(actual).toEqual(expected)
    });

        test('can return a list of all cars given a manufacturer', ()=> {
        carCentre.addCar(bmw);
        carCentre.addCar(bmwTURBO);
        carCentre.addCar(bmwTURBOextra);

        const expected = [bmw, bmwTURBO, bmwTURBOextra] ;
        const actual = carCentre.findCarsGivenManufacturer("bmw outlet");
        expect(actual).toEqual(expected)
    });
})
//     test(' ', ()=> {
//         const expected = ;
//         const actual = ;
//         expected(actual).toBe(expected)
//     });
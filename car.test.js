const car = require('./car');

const bentley = new car("bentley outlet", 500, "manual");

describe('car functionality', () => {
    test.skip('can get car price', () => {
        const expected = 500;
        const actual = bentley.getPrice();
        expect(actual).toBe(expected)
    });

    test.skip('can get car engine type', () =>  {
        const expected = "manual";
        const actual = bentley.getEngineType();
        expect(actual).toBe(expected)
    });
    test.skip('can get car manufacturer', () =>  {
        const expected = "bentley outlet";
        const actual = bentley.getManufacturer();
        expect(actual).toBe(expected)
    });

})
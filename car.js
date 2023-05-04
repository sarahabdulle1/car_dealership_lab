// create a car class
const Car = function(manufacturer, price, engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
}

module.exports = Car;

// create car objects
const bentley = new Car("bentley outlet", 500, "manual");
const bmw = new Car("bmw outlet", 200, "manual");
const bmwTURBO = new Car("bmw outlet", 700, "manual");
const bmwTURBOextra = new Car("bmw outlet", 1100, "manual");
const audi = new Car("audi outlet", 300, "automatic");


// check a car object can be created
console.log(bentley.manufacturer);


//  getManufacturer
Car.prototype.getManufacturer = function (){return this.manufacturer};

Car.prototype.getEngineType= function (){return this.engineType};

Car.prototype.getPrice = function (){return this.price};
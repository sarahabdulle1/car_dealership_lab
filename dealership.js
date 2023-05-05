// create dealership class

const Dealership = function (name, maxNumberOfCars){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.carStock = []; 
}

module.exports = Dealership; //?

// create dealership object
const carCentre = new Dealership ("Car Centre", 30, null);

console.log(carCentre);
//methods
//1: countCarsInStock()
Dealership.prototype.countCars = function (){
    count = 0
    for (car of this.carStock){
        count += 1; 
    }
    return count;
}

// // 2: addCarToStock()

Dealership.prototype.addCar = function (car) {
    this.carStock.push(car);
    return this.carStock;
};

// RETURN MANUFACTURERS
Dealership.prototype.returnManufacturers = function () {
    const manufacturers = this.carStock.map(car => car.manufacturer)
    return manufacturers;
}

// 3: findCarsGivenManufacturer

Dealership.prototype.findCarsGivenManufacturer = function (givenManufacturer) {
    sharedManufacturer = []
    for (car of this.carStock){
        if (car.getManufacturer() == givenManufacturer){
        sharedManufacturer.push(car);
        }
        console.log(sharedManufacturer);
    }    
    return sharedManufacturer;
}
// filter by method

// 5:totalValueOfCarsInStock()

// dealership.prototype.totalValueOfCarsInStock() = function (dealership)

// 1: get the carstock list
// 2: get the price value of each car in the car list 
// 3: create a new array totalprice) and add the price into it
// 4: 

// const total = reduce(accumulator, price) => accumulator + price, 0)
//     for 
// }
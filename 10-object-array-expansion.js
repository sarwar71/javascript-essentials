// Object expansion
let car = {
    brand: 'Toyota',
    model: 2012
};
console.log(car);

function process(car) {
     let carWithColor = {...car, color: 'white'}; // Here copy the original car by spread operator & add the color but don't have any change for the original car.
     printColoredCar(carWithColor)
}

function printColoredCar(car) {
    console.log("Car with color: ", car);
}

process(car);
console.log("Original car: ", car);

// array expansion
const temperatures = [30, 35, 38, 39, 36, 32];
const t = [...temperatures, 40, 33];

console.log("Original temperature: ", temperatures);
console.log("Copy temperature: ", t);
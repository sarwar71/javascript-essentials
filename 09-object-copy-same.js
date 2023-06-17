let carOne = {
    brand: 'Toyota',
    model: 2012
};
console.log("Car One: ", carOne);

let carTwo = carOne; // Here we can see that just carOne copy to carTwo but It's don't a copy for object, here carOne and carTwo reference are the same.

carTwo.model = 2018
console.log("Car Two: ", carTwo);
console.log("Car One: ", carOne);

// mutation in function, adding property

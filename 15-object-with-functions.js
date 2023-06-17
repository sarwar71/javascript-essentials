const car = {
    brand: 'Toyota',
    model: 2012,
    color: 'red',
    printName: function(){
        console.log(car.brand + ":" + car.model);
    }
}
//car.printName();

/////////////////////////////////////////////////////

function printName(){
    console.log(this.brand + ":" + this.model);
}

const car1 = {
    brand: 'Toyota',
    model: 2012,
    color: 'red',
    printName
}

const car2 = {
    brand: 'Nissan',
    model: 2014,
    color: 'blue',
    printName
}
// car1.printName(); // we can use 'this' keyword with we must call following the format: object.function. So now 'this' will be refer left side object.
// car2.printName();

// EXHIBIT 3.1
const printer = car1.printName;
printer(); // output -> undefined:undefined, So here don't have object in left side thats why undefined

// EXHIBIT 3.2
// So we can fixed this issue using the bind()
printer.bind(car1)(); // slution 1

const q = printer.bind(car1); // solution 2
q();


// EXHIBIT 4.1
// setTimeout(function () {
//     console.log(car.brand);
// }, 2000);

// EXHIBIT 4.2
// setTimeout(car.printName, 2000);

// EXHIBIT 5 ?
// setBrand
// getBrand

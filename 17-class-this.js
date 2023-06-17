// class in JS

class Car {

    wheels = 4;

    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    // printName() {
    //     console.log(this.brand + ":" + this.model);
    // }

    // for arrow function no need to bind for setTimeout. In arrow function, 'this' always refer to the instance between the arrow function scope.
    // Note: We used arrow function when appear 'this', for avoid bind, otherwise no need arrow function.
    printName = () => {
        console.log(this.brand + ":" + this.model);
    }

    getName = () => this.brand + ":" + this.model + " Wheels: " + this.wheels;
}

const c1 = new Car('Toyota', 2012);
const c2 = new Car('Nissan', 2016);

c1.printName();
c2.printName();

console.log(c2.getName());




// EXHIBIT 1
//setTimeout(c1.printName, 2000); // Output will be undefined. Node can't understand about c1.printName(object.function). It's understand just a function as parameter. So need to bind.
//setTimeout(c2.printName, 2000);

// EXHIBIT 2
// setTimeout(c1.printName.bind(c1), 2000); // but it's not a proper solution, So can pass into the function.

// // EXHIBIT 3
// setTimeout(function(){
//     c1.printName()
// }, 2000);


// EXHIBIT 4
// show bind in constructor
// show class fields
// show bind in class field
// show arrow function

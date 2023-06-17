// Simple
const temperatures = [30, 35, 38, 39, 36, 32];
console.log(temperatures);

const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
console.log(planets);

// mix
const things = [2, 3, 'hello'];
console.log(things);

// nested
const moons = [[], [], ['Moon'], ['Phobos', 'Demos']];
console.log(moons);

// index assignment
planets[4] = 'Jupiter';
console.log(planets);

planets[8] = 'Pluto';
console.log(planets); // Here 3 items are undefined.
console.log(planets[7]);

// non contiguous index

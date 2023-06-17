// Iterating over arrays
const temperatures = [30, 35, 38, 39, 36, 32];

for (let i = 0; i < temperatures.length; i++) {
    console.log(temperatures[i]);
}
console.log();
// for of
for(let t of temperatures){
    console.log(t);
}


function temp(...temps){
    console.log(temps);
}

temp(33, 44, 22);
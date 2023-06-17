function makeSequence(startingValue) {
    let currentValue = startingValue || 0; // Here 0 is default value for startingValue if we didn't pass any value for that.

    /*
    Function er vitore j local variable gula thake segula store hoy 'stack' a.
    Closure: jodi ekta function ar ekta function ke return kore, j function take return kore (increment) se function ta function (makeSequence) er vitorer 
    joto local variable ache sob gulare bosta bondhi kore dhore rakhe. s1 ekta function copy, s2 r ekta function copy, 2tar different address. So s1 dhara call korle
    s1 er jonno j local variable gular change ase segula dhore rakhbe, s2 er jonno local variable gular j change ase se gula sevabe dhore rakhbe, jehetu function(increment)
    ta return kora hocche.
    */
    return function increment() {
        return currentValue++;
    }
}

const s1 = makeSequence(); // s1 is a function and s1 is a return value of makeSequence. That means s1 point to the increment function.

console.log("s1 values:")
console.log( s1() );
console.log( s1() );
console.log( s1() );

const s2 = makeSequence(100);

console.log("\ns2 values:")
console.log( s2() );
console.log( s2() );
console.log( s2() );

console.log("\ns1 values:")
console.log( s1() );
console.log( s1() );
console.log( s1() );

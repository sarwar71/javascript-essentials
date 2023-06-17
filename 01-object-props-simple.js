/*
let -> value assign and reassignable (mutable)
const -> value assign but not reassignable (but not imutable). For object we can change the values.
var -> old for java script, same as let but have diff behaviour. So avoid for latest js dev.

Object -> Collection of key value pair, json format (json - javaScript object notation)

*/

const student = {
    name: 'Murad Takla',
    age: 34,
    married: false,
    father: {
        name: 'Hasan Takla',
        age: 60
    },
    mother: {
        name: 'Arju Begum',
        age: 55
    }
};

console.log('Student name: ' + student.name);
console.log('Father name: ' + student.father.name);

// Here student is a object and const. So we can not reassign the student object but we can change value into the student object.
// That means student object pointing the specific a memory location, Thats why we can not move the pointer but we can change the value or key or add new kew-value.
student.name = 'Kamal takla'; 

console.log(student);

/*
null -> null is a value, when we defined a variables value as null
undefined -> when we don't defined the variable or defined but not assigned value
*/
let x;

console.log(x);
console.log(student.college);
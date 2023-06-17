const lodash = require('lodash');

const student = {
    name: 'Murad Takla',
    grade: 10,
    age: 34,
    married: false,
    father: {
        name: 'Hasan Takla',
        nid: '19659876',
        occupation: 'Private Service',
        age: 60
    },
};
//console.log("student:", student);

// Make a copy of the student object
/*
by spread operator,copy student's object all values but for nested object in student, copy the object reference as value.
So for the studentCopy and student nested object point the same reference.
*/
const studentCopy = {...student}; // shellow copy: copy for object first level value
studentCopy.age = 40;

console.log("studentCopy.age:", studentCopy.age); // output 40
console.log("student.age:", student.age); // output 34

// nested
// studentCopy.father.age = 80;
// console.log("studentCopy father age:", studentCopy.father.age); // output 80
// console.log("student father age:", student.father.age); // but output 80


// Deep copy
/*
Deep copy: copy for the all level object using  JSON.parse(JSON.stringify()). But is a problem, it's can not proper copy for non plain object such as new Date() etc. object. 
So we can use library (lodash or underscore) for avoid this problem.
*/
//const studentCopy2 = JSON.parse(JSON.stringify(student));
const studentCopy2 = lodash.cloneDeep(student);
studentCopy2.father.age = 80;
console.log("studentCopy.father.age:", studentCopy2.father.age); // output 80
console.log("student.father.age:", student.father.age); // but output 60
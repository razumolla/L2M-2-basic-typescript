"use strict";
/**
 * npx ts-node-dev --respawn src/session/10-generic.ts
 * -----------------------------------------------------
 *
 */
// T = number
// Array<number>
const myNumbers = [1, 2, 3, 4, 5];
const myStrings = ['a', 'xyz', 'abc', 'pqr'];
const myBoolean = [true, false, false, true];
const ourInfo = [
    { name: "fahim", age: 70 },
    { name: "mir", age: 60 },
    { name: "mezba", age: 50 }
];
const A = ['hero', 34, 30];
const B = [45, 34, 'abc'];
const C = [45, 'khan', true];
// generic in function
const printInfo = (param1, param2) => {
    console.log(`param1: ${param1}, param2: ${param2}`);
    return param1;
};
console.log(printInfo('fahim', 32));
const me = {
    name: "Firoz",
    age: "23 years",
    mark: 34
};
// type test = 'name' | 'duration' | 'category' //this prob we can solve using 
// const myTest:test = 'name'
const data = {
    name: "Agni 2",
    duration: 310,
    category: "Action"
};
const myText11 = 'name';
console.log(data[myText11]);

"use strict";
/**
 * Ternary Operator
 */
var _a, _b;
// problem
const age = 22;
// if (age >= 18) {
//     console.log('senior');
// } else {
//     console.log('junior');
// }
// easy solution 
const isAdult = age >= 18 ? 'senior' : 'Junior';
// console.log(isAdult);
/**
 * Nullish Coalescing operator(??)
 * It's work only - Null and Undefind
 *
 */
// const isAuthenticatedUser = null;
// const isAuthenticatedUser = undefined;
const isAuthenticatedUser = '';
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'guest';
console.log(userName);
console.log(userName2);
const manus1 = {
    name: "Manus",
    age: 22,
    address: {
        city: "No City",
        road: "No road",
    }
};
const home = (_b = (_a = manus1 === null || manus1 === void 0 ? void 0 : manus1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No Home"; // defauld value= ' no home'
console.log(home);
// Quiz ques and ans
function generateAdder(a) {
    return function (b) {
        //   return a - b; //2-3
        return a + b; //2+3
    };
}
const addTwo = generateAdder(2); // value of a
console.log(addTwo(3)); //5- vaue of b
console.log(addTwo(5)); //7 - vaue of b

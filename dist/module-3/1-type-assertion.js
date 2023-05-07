"use strict";
/**
 * Type assertion: type define by self
 */
let emni;
emni = 'Next level web development';
emni.length;
// or 
emni.length;
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `converted result is : ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(100);
const resultToBeString = kgToGram('100');
try {
}
catch (err) {
    console.log(err.message);
}

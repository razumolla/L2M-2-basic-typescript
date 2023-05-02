"use strict";
/**
 * Null , Unknown and Never type
 */
const searchName = (value) => {
    if (value === null) {
        console.log("There is nothing to search");
    }
    else {
        console.log('Searching');
    }
};
// searchName("Razu")
// searchName(null)
/**
 * Unknown type: type we can know - Runtime e
 * kmh^-1 --- ms^-1
 */
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, _unit] = speed.split(' ');
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else {
        console.log('There is wrong type');
    }
};
// getMyCarSpeed(10)
// getMyCarSpeed('15 kmh^-1')
// getMyCarSpeed(true)
/**
 * Never type
 * Never return anything, only throw error with dynamic message
 */
function throwError(message) {
    throw new Error(message);
}
// throwError('Never return only errror message');

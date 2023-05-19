"use strict";
/**
 * npx ts-node-dev --respawn src/module-4.5/problem-4.ts
 * -------------------------------------------------------
 * 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.
 */
function reverseArray(array) {
    return array.reverse();
}
const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));
const strings = ["apple", "banana", "cherry"];
console.log(reverseArray(strings)); // Output: ["cherry", "banana", "apple"]

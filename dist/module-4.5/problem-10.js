"use strict";
// /**
//  * npx ts-node-dev --respawn src/module-4.5/problem-10.ts
//  * ---------------------------------------------------------
//  * 10. Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.
//  * 
//  */
// function convertToUppercase(input: string | string[]): string | string[] {
//     if (typeof input === 'string') {
//       return input.toUpperCase();
//     } else if (Array.isArray(input)) {
//       return input.map((str) => str.toUpperCase());
//     } else {
//       throw new Error('Invalid input');
//     }
//   }
//   const strResult = convertToUppercase('hello');
//   console.log(strResult);  // Output: "HELLO"
//   const arrResult = convertToUppercase(['apple', 'banana', 'cherry']);
//   console.log(arrResult);  // Output: ["APPLE", "BANANA", "CHERRY"]

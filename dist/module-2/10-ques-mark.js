"use strict";
// /**
//  * Ternary Operator
//  */
// // problem
// const age: number = 22;
// // if (age >= 18) {
// //     console.log('senior');
// // } else {
// //     console.log('junior');
// // }
// // easy solution 
// const isAdult = age >= 18 ? 'senior' : 'Junior'
// // console.log(isAdult);
// /**
//  * Nullish Coalescing operator(??)
//  * It's work only - Null and Undefind 
//  * 
//  */
// // const isAuthenticatedUser = null;
// // const isAuthenticatedUser = undefined;
// const isAuthenticatedUser = '';
// const userName = isAuthenticatedUser ?? 'guest'
// const userName2 = isAuthenticatedUser ? isAuthenticatedUser:'guest'
// console.log(userName);
// console.log(userName2);
// /**
//  * Optional caining 
//  * Syntax: (a?.b?.c)
//  */
// type Manus = {
//     name: string;
//     age: number;
//     address: {
//         city: "No City";
//         road: "No road";
//         home?:" "
//     }
// }
// const manus1: Manus={
//     name: "Manus",
//     age: 22,
//     address: {
//         city: "No City",
//         road: "No road",
//     }
// }
// const home = manus1?.address?.home ?? "No Home" // defauld value= ' no home'
// console.log(home);
// // Quiz ques and ans
// function generateAdder(a: number): (b: number) => number {
//     return function(b: number) {
//     //   return a - b; //2-3
//       return a + b; //2+3
//     };
//   }
//   const addTwo = generateAdder(2); // value of a
//   console.log(addTwo(3)); //5- vaue of b
//   console.log(addTwo(5)); //7 - vaue of b

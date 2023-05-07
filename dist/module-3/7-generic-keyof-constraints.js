"use strict";
// type personType = {
//     name: string,
//     age: 23,
//     address: string
// };
// type newType = "name" | "age" | "address"; //i did it manually
// type newTypeUsingKeyOf = keyof personType;
// // const aa:newType='address'
// // const ab:newTypeUsingKeyOf='age'
// // ({name:'mojnu',age:23},"age") //output: 23
// // const c = {
// //     name: 'Mr',
// //     age: 100
// // }
// // c['age']
// function getProperty<X,Y extends keyof X>(obj: X, key: Y) {
//     obj[key];
// }
// const property = getProperty({ name: 'Mr x', age: 100 }, "age")
// /**
//  * last: so ekta generic type er upor onno ekta generic type ke force korte pari
//  */

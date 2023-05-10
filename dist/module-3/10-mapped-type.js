"use strict";
// // in jacasxript
// const arrayOfNumbers = [1, 2, 3] // make korte hobe: ['1','2','3']
// const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
// console.log(arrayOfStrings);
// // in typescript
// type AreaNumber = {
//     height: number;
//     width: number;
// }
// // type A = AreaNumber['height'] //look up type
// // type B = keyof AreaNumber; // 'width' | 'height'
// type AreaString = {
//     height: number;
//     width: number
// }
// type AreaReadOnly = {
//     readonly height: number;
//     readonly width: number
// }
// const rectangularArea: AreaReadOnly = {
//     height:10,
//     width: 12
// }
// // rectangularArea.height=12 // now we can not change tha value because height property is- readonly
// // type area = {
// //     [key in 'height'| 'width']: string
// // }
// //---------------------
// type volume = {
//     height: number;
//     width: string;
//     depth:number
// }
// /**
//  * this is map type
//  * we can define data type also
//  * -----
//  * volume['width] --> string
//  *      height: number;
//  *      width: string;
//  *      depth: number;
//  */
// type Area<T> = {
//     // [key in keyof volume]: volume[key]
//     readonly [key in keyof T]: T[key]
// }
// const area1:Area<{ height: number, width: string}>= {height: 10, width: "arju"}
/**
 * Run:  npx ts-node-dev --respawn src/module-3/10-mapped-type.ts
 */
// Quiz-5:
// function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {
//     const item = arr[index];
//     return item[key];
//   }
// const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
// const aaa = getArrayItem(users, 0, 'name')
// console.log(aaa);
// Quiz:7
// type Data = { num1: number }
// type B = {
//   [key in keyof Data]: string;
// }
// const numbers3:B = {
//   num1: 20
// }

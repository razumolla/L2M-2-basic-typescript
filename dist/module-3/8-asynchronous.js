"use strict";
// /**
//  * Async typescript
//  * Promise<string> / Promise<boolen> / Promise<object> /
//  */
// // Mocking
// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = 'Data is fetched'
//         if (data) {
//             resolve(data);
//         } else {
//             reject('failed to fetch data');
//         }
//     })
// }
// // const result1 = makePromise()
// const getPromiseData = async ():Promise<string> => {
//     const data = await makePromise();
//     return data;
// }
// /**
//  * Promise for boolean type
//  */
// const makePromiseBoolean = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//         const data: boolean = true
//         if (data) {
//             resolve(data);
//         } else {
//             reject('failed to fetch data');
//         }
//     })
// }
// const getPromiseDataBoolean = async ():Promise<boolean> => {
//     const data = await makePromiseBoolean();
//     return data;
// }
// /**
//  * make promise for object
//  */
// // type dataType = {
// //     data: string;
// // };
// interface dataType{
//     data: string;
// };
// const makePromiseObject = (): Promise<dataType> => {
//     return new Promise<dataType>((resolve, reject) => {
//         const data: dataType = {data: 'Data is fetched'}
//         if (data) {
//             resolve(data);
//         } else {
//             reject('failed to fetch data');
//         }
//     })
// }
// const getPromiseDataObject = async ():Promise<dataType> => {
//     const data = await makePromiseObject();
//     return data;
// }
// /**
//  * Data fetch from Json Place Holder
//  */
// interface IToDo{
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }
// const getToDo = async (): Promise<IToDo> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     return await response.json();
// }
// const getToDoData = async (): Promise<void> => {
//     const result = await getToDo();
//     console.log(result);
// }
// getToDoData()
// /**
//  * Run : npx ts-node-dev --respawn src/module-3/8-asynchronous.ts
//  */

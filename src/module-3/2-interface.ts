// /**
//  * we use alias type for primitive type
//  * we use Interface type only for specific object type data
//  */

// // we use alias type for primitive type
// // type User = {
// //     name: string,
// //     age: number
// // }

// // // or we can use Interface type for object type data
// // interface IUser{
// //     name: string,
// //     age: number
// // }


// // we can access property(name,age) both way-----

// // const userWithTypeAlias: User={
// //     name: "Type alias",
// //     age: 22,
// // };
// // // userWithTypeAlias.age
// // const userWithInterface: IUser={
// //     name: "Type alias",
// //     age: 22,
// // };
// // // userWithInterface.age



// // --extends Alias---
// type User = {
//     name: string,
//     age: number
// };

// type extendUser = User & {
//     role: string
// }

// // const user: extendUser = {
// //     name: "Extend",
// //     age: 22,
// //     role:'Unknown'
// // }


// // --extends Interface---
// interface IUser{
//     name: string,
//     age: number
// }
// interface IExtendUser extends IUser{
//     role: string;
// }
// // const user: IExtendUser = {
// //     name: "Extend",
// //     age: 22,
// //     role:'Unknown'
// // }



// /**
//  * Object of Javascript : object, function, array
//  * We use type alias for -> function,array
//  *  Type vs Interface
//  */

// type addNumbersType = (num1: number, num2: number) => number
// interface IAddNumbers{
//     (num1: number, num2: number): number
// }

// // const addNumbers= (num1:number,num2:number) :number => num1+num2
// // const addNumbers: addNumbersType = (num1, num2) => num1 + num2;
// const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;

// /**
//  * interface index signature
//  */

// type rollNumbersType = number[];
// interface IRollNumbers{
//     // [index: number]:number //index signature
//     [index: number]:string //index signature
// }
// // const rollNUmbers:rollNumbersType=[1,2,3,4]
// // const rollNUmbers:IRollNumbers=[1,2,3,4] //[index]
// const rollNUmbers:IRollNumbers=['1','2','3','4'] //[index]
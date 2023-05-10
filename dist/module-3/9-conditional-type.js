"use strict";
// // a type dependent on another type
// type a1 = number;
// type a3 = undefined;
// type a4 = number;
// type a2 = a1 extends string ? string : undefined
// //nested conditional type
// type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never 
// type Sheikh = {
//     wife1: string;
//     wife2: string;
// }
// type K= keyof Sheikh //"wife1" extends "wife1" | "wife2"
// // type checkProperty<T> = T extends "wife1" ? true : false         //output: false
// // type checkProperty<T> = T extends {wife1: string} ? true : false    //outpur:true
// type checkProperty<T,K> = K extends keyof T ? true : false
// // type checkWife1 = checkProperty<Sheikh,'wife1'>;
// type checkWife1 = checkProperty<Sheikh, 'wife3'>;
// /**
//  * Matha kharap example
//  * type jodi never kore dei tahole oita bandobi theke harai jabe
//  */
// type Bandobi = "Monika" | "Rachel" | "Pheobe";
// type removeBandobi<T,K> = T extends K ? never : T
// type currentBandobi = removeBandobi<Bandobi,"Monika">;
// /**
//  * Run: npx ts-node-dev --respawn src/module-3/9-conditional-type.ts
//  */

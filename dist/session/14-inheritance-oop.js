"use strict";
// /**
//  * npx ts-node-dev --respawn src/session/14-inheritance-oop.ts
//  * --------------------------------------------------
//  * create class
//  */
// class Person {
//     name: string;
//     age: number;
//     constructor(name1: string, age1: number) {
//         this.name = name1;
//         this.age = age1;
//     }
// }
// const p1 = new Person('raz', 22);
// // console.log(p1);
// /**
//  * Inheritance
//  */
// class Person1 {
//     name: string;
//     age: number;
//     constructor(name1: string, age1: number) {
//         this.name = name1;
//         this.age = age1;
//     }
//     show() {
//         console.log(`Name:${this.name} and Age: ${this.age}`);
//     }
// }
// class Person2 extends Person1 {
//     salary: number; 
//     position: string;
//     constructor(name:string, age:number,salary1:number,position1: string) {
//         super(name,age);
//         this.salary = salary1;
//         this.position = position1;
//     }
//     show() {
//         console.log(`Name:${this.name} and Age: ${this.age}`);
//     }
// }
// const p2 = new Person1('Razu', 22);
// const p3 = new Person2('Razu', 22, 500000, 'Developer');
// // console.log(p2);
// // console.log(p3.show());

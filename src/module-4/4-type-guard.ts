// /**
//  * Run:  npx ts-node-dev --respawn src/module-4/4-type-guard.ts
//  * -----------------------------------------------------
//  * type guard is vvery important
//  * this topic(type-guard) used in class and function also
//  * -------------
//  * there are different type of guard
//  */

// //1. key-of guard
// type AlphaNewMeric = string | number;
// // function add(param1: string | number, param2: string | number): string | number {
// function add(param1:AlphaNewMeric , param2: AlphaNewMeric): AlphaNewMeric{
//     if (typeof param1 == "number" && typeof param2 == "number") {
//         return param1 + param2;
//     } else {
//         return param1.toString() + param2.toString();
//     }
// }
// // add(1, 2)
// // add('1', '2')

// // 2.in guard 
// type NormalUserType = {
//     name: string;
// };
  
// type AdminUserType = {
//     name: string;
//     role: "admin";
// };
// const normalUser1: NormalUserType = { name: "Mr. kallu" };
// const adminUser1: AdminUserType = { name: "Mr. Gallu", role: "admin" };

// function getUser(user: NormalUserType | AdminUserType): string {
//     if ("role" in user) {
//         return `I am an admin and my role is ${user.role}`;
//     } else {
//         return `I am a normal user`;
//     }
// }

// // console.log(getUser(normalUser1));
// // console.log(getUser(adminUser1));


// //3. instance of guard
// class Animal {
//     name: string;
//     species: string;
//     constructor(name: string, species: string) {
//       this.name = name;
//       this.species = species;
//     }
//     makeSound() {
//       console.log("I am making sound");
//     }
//   }

// class Dog extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species);
//     }
//     makeBark() {
//         console.log(" I am barking");
//     }
// }

// class Cat extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species);
//     }
//     makeMeaw() {
//         console.log("I am Meawing");
//     }
// }
// function isDog(animal: Animal): animal is Dog {
//     return animal instanceof Dog
// }
// function isCat(animal: Animal): animal is Cat {
//     return animal instanceof Cat
// }
// // func receive obj
// function getAnimal(animal: Animal) {
//     if (isDog(animal)) {
//         animal.makeBark();
//     } else if (isCat(animal)) {
//         animal.makeMeaw();
//     } else {
//         animal.makeSound();
//     }
// }

// const animal1= new Dog('Geman Bhai','dog') // intance of Dog 
// const animal2 = new Cat('My cat', 'cat') // intance of Cat

// getAnimal(animal1);
// getAnimal(animal2);
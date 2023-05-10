/**
 * Run: npx ts-node-dev --respawn src/module-4/3-inheritance.ts
 * ----------------------------------------------------------------
 */

// class Student{
//     name: string;
//     age: number;
//     address: string;
//     constructor(name: string, age: number, address: string) {
//         this.name = name
//         this.age = age
//         this.address=address
//     }
//     makeSleep(hours: number): string {
//         return `This ${this.name} will sleep for ${hours} `
//     }
// }

// class Teacher{
//     name: string;
//     age: number;
//     address: string;
//     designation: string;
//     constructor(name: string, age: number, address: string, designation: string) {
//         this.name = name
//         this.age = age
//         this.address = address
//         this.designation=designation
//     }
//     makeSleep(hours: number): string {
//         return `This ${this.name} will sleep for ${hours} `
//     }
//     takeClasses(numOfClass: number):string {
//         return `This ${this.name} will take ${numOfClass}  classes`
//     }
// }

/**
 * now we reduce repetitive work -using inheritance OOP
 */


// class Parent {
//     name: string;
//     age: number;
//     address: string;
//     constructor(name: string, age: number, address: string) {
//         this.name = name
//         this.age = age
//         this.address=address
//     }
//     makeSleep(hours: number): string {
//         return `This ${this.name} will sleep for ${hours} ` 
//     }
// }

// class Student extends Parent{
//     constructor(name: string, age: number, address: string) {
//         super(name,age,address)
//     }
// }

// class Teacher extends Parent{
//     designation: string;
//     constructor(name: string, age: number, address: string, designation: string) {
//         super(name,age,address)
//         this.designation=designation
//     }
//     takeClasses(numOfClass: number):string {
//         return `This ${this.name} will take ${numOfClass}  classes`
//     }
// }

// //now we create instance 
// const Student1 = new Student('Razu', 22, 'dhaka');
// Student1.makeSleep(5);
/**
 * For Run this file: npx ts-node-dev --respawn src/module-4/1-object.ts
 * class e jokhn ekta function declear kora hoi setake bole method
 * class,method,dog instance
 * ---
 * class er modde arrow function kaj kore  nah-> useing simple function
 */

// class
// class Animal{
//     public name: string; // property - type
//     public specise: string;
//     public sound: string;
//     constructor( name: string, specise: string,sound: string){
//         this.name = name;
//         this.specise = specise;
//         this.sound = sound;
//     }
//     // method
//     public makeSound() {
//         console.log(`The ${this.name} says ${this.sound}`); //The German Shephard says Ghew Ghew
//     }
// }
// //Instance for dog and cat
// const dog =new Animal('German Shephard','dog','Ghew Ghew')
// const cat =new Animal('My cat','cat','Mew Mew')
// dog.makeSound();
// cat.makeSound();



/**
 *  we want to reduce repetitive work- using Parameter Properties
 * Parameter Properties - er moddome type and initialize eksathe korte pari
 */

class Animal{
    constructor(public name: string, public specise: string, public sound: string){
    }
    public makeSound() {
        console.log(`The ${this.name} says ${this.sound} after define parameter properties.`);
    }
}
const dog = new Animal('German Shephard', 'dog', 'Ghew Ghew');
dog.makeSound();
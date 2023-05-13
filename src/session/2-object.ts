/**
 * npx ts-node-dev --respawn src/session/2-object.ts
 */


const heroObj: {
    name: string;
    readonly age: number;
    professtion: string;
    isMarid?: boolean
} = {
    name: 'Khan',
    age: 22,
    professtion: 'Programmer',
    isMarid: false
}

// heroObj.age = 40; //readonly declare korar por we cant not re assign value

console.log(heroObj);
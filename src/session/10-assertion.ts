/**
 * npx ts-node-dev --respawn src/session/10-assertion.ts
 * -----------------------------------------------------
 * type assertion
 * jokhon amra type jani , unknown use korar por type- paitesi na tokhon (as) use kore type assign korte hoi
 * 
 */

const thinkSomething: unknown = '34.55455';
//const result = (thinkSomething as number)
// console.log((thinkSomething as string).length);


const myLuckyNum = (num: string | number): number | string =>{
    if(typeof num === 'string'){
        return "This is string";
    }
    return num;
}
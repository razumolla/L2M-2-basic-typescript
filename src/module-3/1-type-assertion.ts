/**
 * Type assertion: type define by self
 */

let emni: any;

emni = 'Next level web development';

(emni as string).length;
// or 
<string>emni.length;


function kgToGram(param: string | number):string| number|undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `converted result is : ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = <number>kgToGram(100) ;
const resultToBeString = <string>kgToGram('100');
// const resultToBeNumber = kgToGram(100) as number;
// const resultToBeString = kgToGram('100') as string;
// console.log(resultToBeNumber);
// console.log(resultToBeString);


type CustomType = {
    message: string
}

try {
    
} catch(err) {
    console.log((err as CustomType).message);
}
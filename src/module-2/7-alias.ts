// explicit vabe type declare korlam

// Type Alias
type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
} 

const crush1:CrushType = {
    name: "Moina Pakhi",
    age: 22,
    profession: 'web Developer',
    address:'uganda'
}

const crush2: CrushType= {
    name: "Tia Pakhi",
    profession: 'Next level web Developer',
    address:'Tila'
}

// extra example
type CrushMaridType = boolean;
const idMarid: CrushMaridType = false;

type CrushNameType = string;
const courseName: CrushNameType = "Next Level web developmet";


// alias with function
type OperationType = (x: number, y: number) => number;
const calculate = (
    num1: number, //10
    num2: number, //20
    operation: OperationType // (x, y) => x + y --- (10,20)=> 10+20
) => {
    return operation(num1,num2)
}

console.log(calculate(10, 20, (x, y) => x + y) );
console.log(calculate(30, 20, (x, y) => x - y));




/**
 * Normal function
 */

function add(num1:number, num2:number) {
    return num1 + num2;
}
const result=add(2,4)

/**
 * Arrow function
 */
const total = (num1: number, num2: number): number => num1 + num2;

const arr = [2, 5, 4];
const newArr = arr.map((elem: number) => elem * elem);
console.log(newArr);

// ------------------------------------

const person: {
    name: string,
    balance: number,
    addBalance(money: number): number;
} = {
    name: "Razu",
    balance: 100,
    addBalance(money: number){
        return this.balance + money;
    }
}

// string
const person2: {
    name: string,
    balance: number,
    addBalance(money: number): string;
} = {
    name: "Razu",
    balance: 100,
    addBalance(money: number){
        return `My new Balance is ${ this.balance + money }`;
    }
}

// void : no return
const person3: {
    name: string,
    balance: number,
    addBalance(money: number): void;
} = {
    name: "Razu",
    balance: 100,
    addBalance(money: number){
        console.log(`My new Balance is ${ this.balance + money }`);
    }
}
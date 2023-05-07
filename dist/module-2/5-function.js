"use strict";
/**
 * Normal function
 */
function add(num1, num2) {
    return num1 + num2;
}
const result = add(2, 4);
/**
 * Arrow function
 */
const total = (num1, num2) => num1 + num2;
const arr = [2, 5, 4];
const newArr = arr.map((elem) => elem * elem);
console.log(newArr);
// ------------------------------------
const person = {
    name: "Razu",
    balance: 100,
    addBalance(money) {
        return this.balance + money;
    }
};
// string
const person2 = {
    name: "Razu",
    balance: 100,
    addBalance(money) {
        return `My new Balance is ${this.balance + money}`;
    }
};
// void : no return
const person3 = {
    name: "Razu",
    balance: 100,
    addBalance(money) {
        console.log(`My new Balance is ${this.balance + money}`);
    }
};

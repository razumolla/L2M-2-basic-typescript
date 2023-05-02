"use strict";
// explicit vabe type declare korlam
const crush1 = {
    name: "Moina Pakhi",
    age: 22,
    profession: 'web Developer',
    address: 'uganda'
};
const crush2 = {
    name: "Tia Pakhi",
    profession: 'Next level web Developer',
    address: 'Tila'
};
const idMarid = false;
const courseName = "Next Level web developmet";
const calculate = (num1, //10
num2, //20
operation // (x, y) => x + y --- (10,20)=> 10+20
) => {
    return operation(num1, num2);
};
console.log(calculate(10, 20, (x, y) => x + y));
console.log(calculate(30, 20, (x, y) => x - y));

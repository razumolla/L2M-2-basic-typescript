"use strict";
/**
 * generic Interface
 */
const crush1 = {
    name: 'Pakhi',
    husband: true
};
const crush2 = {
    name: 'Kate winslet',
    husband: "Razu"
};
const crush3 = {
    name: 'Kate winslet',
    husband: {
        name: "Razu",
        salary: 150000,
    }
};
// const crush4: CrushInterface<{name:string,age:number},{name:string,age:number}> = {
const crush4 = {
    name: 'Kate winslet',
    husband: {
        name: 'Raja',
        age: 25
    },
    wife: {
        name: "Rani",
        age: 20
    }
};

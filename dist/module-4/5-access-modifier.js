"use strict";
// /**
//  * Run: npx ts-node-dev --respawn src/module-4/5-access-modifier.ts
//  */
// class BankAccount {
//     public id: number;
//     public name: string;
//     // private _balance: number;
//     protected _balance: number;
//     constructor(id: number, name: string, balance: number) {
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }
//     getBalance() {
//         console.log(`My current account is ${this._balance}`);
//     }
//     addDeposit(amount: number) {
//         this._balance = this._balance + amount;
//     }
// }
// class StudentAccount extends BankAccount{
//     test(){
//         // this._balance
//     }
// }
// const myAccount = new BankAccount(1001, 'Razu', 500);
// // myAccount.balance = 0;
// console.log(myAccount);
// myAccount.addDeposit(20);
// myAccount.getBalance();

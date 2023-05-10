"use strict";
// /**
//  * Run: npx ts-node-dev --respawn src/module-4/6-getter-setter.ts
//  */
// class BankAccount {
//     public id: number;
//     public name: string;
//     private _balance: number;
//     constructor(id: number, name: string, balance: number) {
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }
//     //gretter
//     get balance(): number {
//         return this._balance;
//     }
//     // getBalance() {
//     //    return this._balance
//     // }
//     //setter
//     set deposit(amount: number){
//         this._balance = this._balance + amount;
//     }
//     // addDeposit(amount: number) {
//     //     this._balance = this._balance + amount;
//     // }
// }
// const myAccount = new BankAccount(1001, 'Razu', 500);
// // myAccount.addDeposit(20);
// // myAccount.getBalance();
// console.log(myAccount.balance); //500
// myAccount.deposit=100
// console.log(myAccount.balance); //600

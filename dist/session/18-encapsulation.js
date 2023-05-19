"use strict";
class MyBank {
    constructor(id, amount, name) {
        this.amount = amount;
        this.id = id;
        this.name = name;
    }
}
const bank = new MyBank(101, 50000, "Fahim Ahammed");
//bank.amount = 0;
console.log(bank);

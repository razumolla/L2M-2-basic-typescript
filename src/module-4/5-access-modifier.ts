/**
 * Run: npx ts-node-dev --respawn src/module-4/5-access-modifier.ts
 */

class BankAccount {
    id: number;
    name: string;
    balance: number;
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this.balance = balance;

    }
}

const myAccount = new BankAccount(1001, 'Razu', 500);
console.log(myAccount);
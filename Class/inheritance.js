
//? Create BankAccount Constructor Class
class BankAccount {
    constructor(CustomerName, balance=0){
        this.CustomerName = CustomerName;
        this.balance = balance;
        this.AccountNumber = Date.now();
    }

    Deposit(Amount){
        this.balance += Amount;
    }
    Withdraw(Amount){
        this.balance -= Amount;
    }
};

// let Prince = new BankAccount("Prince", 5000);
// Prince.Deposit(5000);
// Prince.Withdraw(2000);
// console.log(Prince);


//? Create SavingAccount with extends(inheritance) BankAccount 

class SavingAccount extends BankAccount {
    constructor(CustomerName , balance ){
        super(CustomerName, balance);
        this.transactionLimit = 100000;
        this.DueAmount = 0;
    };

    GetPersanalLoan(Amount){
        alert("Loan Passed At "+Amount+" Amount");
        this.balance += Amount;
        this.DueAmount += -Amount;
    };
};

const Prince = new SavingAccount("Prince", 1000)
Prince.Deposit(5000);
Prince.Withdraw(1000);
// Prince.GetPersanalLoan(50000); // To get A Loan 

console.log(Prince);


//! old Way To Write A inheritance Constructor function 
// function ZeroSavingBankAccount(CustomerName, balance=0){
//     this.AccountNumber = Date.now();
//     this.CustomerName = CustomerName;
//     this.balance = balance;
// };
// ZeroSavingBankAccount.prototype.Deposit = function(amount){
//     this.balance += amount;
// }
// ZeroSavingBankAccount.prototype.Withdraw = function(amount){
//     this.balance -= amount;
// }


// //?  SavingBankAccount By inheritance ZeroSavingBankAccount
// function SavingBankAccount(CustomerName, balance){
//     // inheritance ZeroSavingBankAccount properti
//     ZeroSavingBankAccount.call(this, CustomerName, balance);
//     this.transactionLimit = 10000;
// };

// // inheritance ZeroSavingBankAccount Method

// // SavingBankAccount.prototype.Deposit = ZeroSavingBankAccount.prototype.Deposit; // 1 by 1
// // SavingBankAccount.prototype.Withdraw = ZeroSavingBankAccount.prototype.Withdraw;
// //? Best Way to All 
// SavingBankAccount.prototype = Object.create(ZeroSavingBankAccount.prototype)


// SavingBankAccount.prototype.persanalLoan = function(amount){
//     // some logic Here but for Testing 
//     console.log("Taked Persanal Loan "+ amount);
// };

// let Prince = new SavingBankAccount("Prince");
// Prince.Deposit(5000);
// Prince.Withdraw(1000);
// Prince.persanalLoan(50000);
// console.log(Prince);

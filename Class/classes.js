
//? Old Way To declare Constructor function.
// function BankAccount(CustomerName, balence = 0) {
//   this.AccountNumber = Date.now();
//   this.CustomerName = CustomerName;
//   this.balence = balence;
// }

//? Add prototypes as Constructor  method 
// BankAccount.prototype.Deposit =  (Amount) => {
//   this.balence += Amount;
// };
// BankAccount.prototype.Withdraw =  (Amount) =>{
//   this.balence -= Amount;
// }; 

// let Vikash = new BankAccount("Prince", 1000);


//?  Real Example  for Class
// class BankAccount {
//   constructor(CustomerName, balence = 0) {
//     this.CustomerName = CustomerName;
//     this.balence = balence;
//     this.AccountNumber = Date.now();
//   }

//   Deposit(Amount) {
//     this.balence = this.balence + Amount;
//   }
//   Withdraw(Amount) {
//     this.balence = this.balence - Amount;
//   }
// };




// // Account Create Account
// const Balence = document.querySelector("#Belance");
// const CustomerName = document.querySelector("#CustomerName");
// const AccountForm = document.querySelector("#AccountForm");

// // Deposit Amount
// const DepositForm = document.querySelector("#DepositForm");
// const DepositAccountNumber = document.querySelector("#AccountNumber");
// const DepositAmount = document.querySelector("#Amount");

// // Withdraw Amount
// const WithdrawForm = document.querySelector("#WithdrawForm");
// const WithdrawAccountNumber = document.querySelector(
//   " #WithdrawForm #AccountNumber"
// );
// const WithdrawAmount = document.querySelector("#WithdrawForm #Amount");

// let AllAccounts = [];

// // Create Bank Account
// AccountForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let CreateAccount = new BankAccount(
//     CustomerName.value,
//     Number(Balence.value)
//   );
//   AllAccounts.push(CreateAccount);
//   console.log(AllAccounts);
// });

// // Deposit Function
// DepositForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const FindAccountNumber = AllAccounts.find(
//     (AccountData) =>
//       AccountData.AccountNumber === Number(DepositAccountNumber.value)
//   );
//   FindAccountNumber.Deposit(Number(DepositAmount.value));
//   console.log(AllAccounts);
// });

// //Withdraw Function

// WithdrawForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const FindAccountNumber = AllAccounts.find(
//     (AccountData) =>
//       AccountData.AccountNumber === Number(WithdrawAccountNumber.value)
//   );
//   FindAccountNumber.Withdraw(Number(WithdrawAmount.value));
//   console.log(AllAccounts);
// });

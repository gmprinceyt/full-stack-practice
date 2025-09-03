// function greets (firstName: string){
//     console.log("Hello,", firstName)
// };
// greets("Prince")

// function  sum(a:number, b:number):number{
//     return a+b;
// };

// console.log(sum(2,5))

// function userAge(age:number):boolean{
//     if (age >= 18){
//         return true;
//     }else {
//         return false;
//     }
// };

// console.log(userAge(18))

// function interval(callback:()=>void){
//     setTimeout(callback,1000)
// }

// interval(()=> {
//     console.log("HEllo Afer 1 Secound")
// })

// const greet = (name: string) => `Hello, ${name}!`;

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
//   email?: string;
// }

// function greet(user: User) {
//   if (user.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(greet({firstName:"Prince", lastName: "kumar", age: 18}));

// function userInfo(user:User){
//     console.log("firstName: ",user.firstName)
//     console.log("lastName: ",user.lastName)
//     console.log("age: ",user.age)
//     console.log("email: ",user.email)
// }
// userInfo({firstName:"Prince", lastName: "kumar", age: 18})

// interface Person {
//   name: string;
//   age: number;
//   greet(phase: string): void;
// }

// class Employee implements Person { // interface can use in class implementtions
//   name:string;
//   age:number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }

//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   }
// }

// const Employee1 = new Employee("Prince Kumar", 19);

// Employee1.greet("Hello,");

//// Type in Typescript
// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }

/// !. Unions in type have
// type StringOrNumber  = string | number;

// // Print User Id  It can be String Or Number As well
// function PrintId(id:StringOrNumber){
//     console.log("user Id: "+ id)
// };
// PrintId("Prince")
// PrintId(1)

/// 2. Intersection in type have

// type Manger = {
//     name: string;
//     department:string
// }
// interface Employee  {
//     name: string;
//     StartDate:Date;
// };

// type TeamLead = Manger & Employee;

// const x:TeamLead = {
//     name: "Prince",
//     department: "Softwere Develoment",
//     StartDate: new Date(2006,6,30)
// };
// console.log(x.StartDate)

// Arrays in TS
//If you want to access arrays in typescript, it’s as simple as adding a [] annotation next to the type

// Example 1
// Given an array of positive integers as input, return the maximum value in the array

// function getMax(arr:number[]){
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i]
//         }
//     };
//     console.log(max);
//     return max;
// };

// getMax([1,2,4,5,11,7,8,9])

// Given a list of users, filter out the users that are legal (greater than 18 years of age)
// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// function isLegal(user: User[]) {
//   const filtered = user.filter((user) => user.age >= 18);
//   return filtered;
// }

// const users: User[] = [
//   {
//     firstName: "prince",
//     lastName: "kumar",
//     age: 17,
//   },
//   {
//     firstName: "amana",
//     lastName: "kumar",
//     age: 18,
//   },
//   {
//     firstName: "vikash",
//     lastName: "kumar",
//     age: 24,
//   },
// ];

// console.log(isLegal(users));

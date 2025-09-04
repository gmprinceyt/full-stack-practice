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

// abstract class Shape {
//   abstract name: string;

//   abstract calculateArea(): number;

//   describe(): void {
//     console.log(`This shape is a ${this.name} with an area of ${this.calculateArea()} units squared.`);
//   }
// };

// class Rectangle extends Shape {
//   name = "Rectangle";

//   constructor(public width: number, public height: number) {
//     super();
//   }

//   // Implement the abstract method
//   calculateArea(): number {
//     return this.width * this.height;
//   }
// }

// // Another subclass implementing the abstract class
// class Circle extends Shape {
//   name = "Circle";

//   constructor(public radius: number) {
//     super();
//   }

//   // Implement the abstract method
//   calculateArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// };

// const circle = new Circle(12);
// const rectangle = new Rectangle(50, 50);
// console.log(circle.describe())
// console.log(rectangle.describe())

// Enums

enum Drection {
  Up,
  Down,
  Right,
  Left,
}

/**
 * 
 * @param keyword {
  '0': 'Up',   
  '1': 'Down', 
  '2': 'Right',
  '3': 'Left', 
  Up: 0,
  Down: 1,
  Right: 2,
  Left: 3
}
 * @returns 0
 */

function keyPress(keyword: Drection) {
  if (keyword === Drection.Up) {
    console.log(Drection);
  }
  return 0;
}

//console.log(keyPress(Drection.Up));

enum StatusCode {
  /**
   * if Responese Success Status
   *
   * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
   */
  Success = 200,
  /**
   * if Responese Not Found in Database Status
   *
   * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
   */
  NotFound = 404,
  Created = 201,
  Error = 500,
}

/**
 * 
 * @param statusCode StatusCode
 * {
  '200': 'Success',
  '201': 'Created',
  '404': 'NotFound',
  '500': 'Error',
  Success: 200,
  NotFound: 404,
  Created: 201,
  Error: 500
}
 * @returns StatusCode - Enum 
 */

function getRequest(statusCode: StatusCode) {
  console.log(StatusCode);
  return statusCode;
}

//console.log(getRequest(StatusCode.Success)); //200

// enum Some {
//     Left = 1,
//     Right, // 2
//     bottom //3
// }

// enum Some1 {
//     Left = 10,
//     Right, // 11
//     bottom // 12
// };
// console.log(Some)
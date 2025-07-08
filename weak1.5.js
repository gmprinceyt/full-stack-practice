//? Async Function  -> SetTimeOut

// function sum(n){
//     let a = 0;
//     for (let i = 0; i <=n; i++){
//         a += i;
//     }
//     return a;
// }

// function sumCall(){
//     console.log( sum(100));
// }

// // its wait for compalate below task
// setTimeout(sumCall, 1000);
// let a  = 0;
// for (let i =  1; i <= 10000000000; i++){
//     a++
// }
// console.log("Jay Shree Ram",a);

//? Async Function  -> SetTimeOut

// const fs = require('fs');
// fs.readFile('a.txt', 'utf-8', function(err, data){
//     // console.log(err);
//     console.log(data);
// });

// console.log('hii There');

// let a = 0;
// for (let i = 0; i < 1000000000; i++){
//     a++;
// }

// console.log('hii There 2');

//? Whats Happen if 2 async function

// console.log("Hii There"); // 1 run

// setTimeout(function fn1() {
//   console.log("Inside function 1");
// }, 2000); // 4 run

// setTimeout(function fn2() {
//   console.log("Inside function 2"); // 3 run
// }, 1000);

// console.log("Hii There 2"); // 2 run;



//? callback function 

// const fs = require("fs");
// function ReadFile(callback) {
//   let text = "Hello";
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     callback(data);
//     text = "hii";
//   });
//   return text;
// }

// function printData(data) {
//   console.log(data, "function inside");
// }

// console.log(ReadFile(printData));


//? Promise
// const fs = require("fs");
// function readfile() {
//   console.log('after return Promise')
//   return new Promise((resolve, reject) => {
//     console.log('inside promise')
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       console.log('readfile async')
//       resolve(data);
//     });
//   });
// }
// function callback(data) {
//   console.log(data, "inside in callback function ");
// }
// console.log(readfile().then(callback));



//? Aysnc Await 

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       console.log("readfile async");
//       resolve(data);
//       console.log("Hello");
//     });
//   }, 5000);
// });

// async function main() {
//   let data = await promise;
//   console.log(data);
// }
// main();
// console.log("after main");

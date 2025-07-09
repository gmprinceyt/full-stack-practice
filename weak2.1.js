//? Revesion

// function getData(data, getNextData) {
//   setTimeout(() => {
//     getNextData(data);
//   }, 1000);
// }

// getData(1, (data) => {
//   console.log(data);
//   getData(2, (data) => {
//     console.log(data);
//     getData(3, (data) => {
//       console.log(data);
//       getData(4, (data) => {
//         console.log(data);
//       });
//     });
//   });
// });

// function call(data) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Data Loaded ${data}`);
//     }, 1000);
//   });
// }

// call(1).then((data) => {
//   console.log(data);
//   call(2).then((data) => {
//     console.log(data);
//     call(3).then((data) => {
//       console.log(data);
//       call(4).then((data) => {
//         console.log(data);
//       });
//     });
//   });
// });

//Callback Hell Example
// function fn1(call) {
//   setTimeout(() => {
//     console.log("Data 1 loading...");
//     call();
//   }, 1000);
// }

// function fn2(call) {
//   setTimeout(() => {
//     console.log("Data 2 loading...");
//     call();
//   }, 2000);
// }

// function fn3(call) {
//   setTimeout(() => {
//     console.log("Data 3 loading...");
//     call();
//   }, 2000);
// }
// function fn4() {
//   setTimeout(() => {
//     console.log("Data 4 loading...");
//   }, 2000);
// }
// // Callback hell
// fn1(() => {
//   fn2(() => {
//     fn3(() => {
//       fn4();
//     });
//   });
// });

//? Async Handler
// const AysncHandler = (fnc) => {
//   return Promise.resolve(fnc()).catch((err) => {
//     console.log(err.message, "inside in Error");
//   });
// };

// function callback(err ,data) {
//   console.log(data);
// }

// const fs = require("fs");

// AysncHandler(async function () {
//    await fs.readFile("a.txt", "utf-8", callback);
// });

//? Promise
// const fs = require("fs");
// let promise = new Promise((resolve, reject) => {
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     resolve(data);
//     reject(err);
//   });
// });

// function callback(data) {
//   console.log(data);
// }

// promise.then(callback).catch((err) => {
//   console.log(err.message, "inside in catch function ");
// });


// for (let i = 0; i < 100; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000);
// }
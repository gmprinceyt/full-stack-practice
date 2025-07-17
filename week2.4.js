//? Map , filter method

// let arr = [1,1,23,4,6];
// let nearr = [];

// for(let i = 0; i < arr.length; i++){
//     nearr.push(arr[i]*2)
// };

// console.log(nearr);

//? Some Things With clear way
// let arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((val)=> val*2)
// console.log(newArr);

//? Own Map function
// function ownMap(arr, callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(callback(arr[i], i));
//  }
//   return newArr;
// }
// const nearr = ownMap(arr, (val, i) => {
//   return val * 2;
// });

//? filter
// filter value that val === 1
// let arr = [1,2,3,3,4,1];

// let newArr = [];
// for(let i = 0; i < arr.length; i++){
//     if (arr[i] === 1){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)

//? Simple and Onther Way write Filter method that provide array in bulid function out of the box

// const newArr = arr.filter( val => val === 1)
// console.log(newArr);

//? lets create OWn Filter Method

// function Filter(arr, callback){
//     let newArr = [ ];

//     for(let i = 0; i < arr.length; i++){
//         if (callback(arr[i], i)){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// };

// const fill = Filter(arr, (val, i) =>val === 1)
// console.log(fill);

// // ? Try with Compelex Data

// const arrayOfObj = [
//     {
//         name: 'Prince',
//         age: 18
//     },
//     {
//         name: 'rohan',
//         age: 18
//     },
//     {
//         name: 'amit',
//         age: 22
//     },
//     {
//         name: 'rohit',
//         age: 29
//     },
// ]

// const fill1 = Filter(arrayOfObj, val => val.age === 18 );
// const fill2 = arrayOfObj.filter(val => val.age === 18);
// console.log(fill1); // same result
// console.log(fill2); // same resilt

//? Reduce Method
// sum of array;
let arr = [1, 2, 3, 5, 6, 9, 7, 1, 0];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

//? Other And Simple way with more readable code

// let sum1 = arr.reduce((prev, cerr, i, arr) => {
//     console.log(prev, cerr, i)
//   return prev + cerr;
// }, 0);
// console.log(sum1);

// // ? Write Your Own Reduce Medhod
// function Reduce(arr, callback, intialValue) {
//   let int = intialValue || arr[0];

//   if (intialValue) {
//     for (let i = 0; i < arr.length; i++) {
//       int = callback(int, arr[i], i, arr);
//     }
//   } else {
//     for (let i = 1; i < arr.length; i++) {
//       int = callback(int, arr[i], i, arr);
//     }
//   }
//   return int;
// };

// const sum2 = Reduce(arr, (prev, cerr, i, arr)=>{
//     console.log(prev, cerr, i)
//     return prev + cerr;
// }, 0);
// console.log(sum2)


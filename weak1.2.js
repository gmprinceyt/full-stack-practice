// 1. Write a program prints all the even numbers in an array
// 2. Write a program to print the biggest number in an arrya
// 3. Write a program that prints all the male people’s first name given a complex object
// 4. Write a program that reverses all the elements of an array
//? -> array / object

//? Answer 1.
// let arr = [12,23,54,7,8,9,43,54,3,67,22];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2 === 0){
//         console.log(arr[i]);
//     }
// }

//? Answer 2.
// let arr = [1,24,678,33,21,2,8,93,2,26,89,0,0,2];
// let maxValue = 0;
// for (let i = 0; i < arr.length; i++){
//     if (maxValue < arr[i]){
//         maxValue = arr[i];
//     }
// }

// console.log(maxValue);

//? Answer 3
// let AllUser = [{
//     firstname : 'Harkirat',
//     gender: 'male'
// }, {
//     firstname : 'Prince ',
//     gender: 'male'
// },{
//     firstname : 'priya',
//     gender: 'female'
// },{
//     firstname : 'rohi',
//     gender: 'female'
// }];

// for (let i = 0; i < AllUser.length; i++){
//     if (AllUser[i].gender === 'male'){
//         console.log(AllUser[i].firstname)
//     }
// }

//? Answer 4.

// let orignal = [1,2,3,4,5,6,7,8,9];
// let reverses = [];
//* We can use reverse in build method;
// for (let i = orignal.length-1; i >= 0; i--) {
//     reverses.push(orignal[i])
// }

//TODO * Done ✅;

//? Callbacks -> a function take  functon as a parameter that is callback function

//* example 1.
// function calculate(a,b,fn ){
//     console.log(arguments)
//     let sum = a + b;
//     let result =  fn(sum);
//     return result;
// }

// function consoleSumdata(data){
//     let result = 'Sum All Number is: ' + data;
//     return result;
// }

// function consoleSumdataresult(data){
//      let result = 'Sum All Number Result is: ' + data;
//     return result;
// };

// let sum = calculate(1,2,consoleSumdataresult)
// console.log(sum)

//* example 2.
// function calculateArithmetic(a, b, fn) {
//     let opration = fn(a,b);

//     return opration;
// };

// function sum(a,b){
//     return a+ b ;
// }
// function mins(a,b){
//     return a- b ;
// }

// let result = calculateArithmetic(1,2,mins);
// console.log(result);

//TODO DONE - function and callback Function ✅

//! Assignments
// 1. Create a counter in Javascript (counts down from 30 to 0) ✅
// 2. Calculate the time it takes between a setTimeout call and the inner function actually running ✅
// 3. Create a terminal clock (HH:MM:SS)

//? 1
// let counter = 30;
// for(let i = counter; i >= 0; i--){
//     console.log(i)
// }

//? 2
// function innerFunction () { // 2s
//     setTimeout(function(){console.log("Hello")}, 2000)
// }
// setTimeout(innerFunction, 1000); // 1s + innerfun -> 2s = 3s

//? 3.
// let hh = 0;
// let mm = 0;
// let ss = 0;

// function clock() {
//   ss++;
//   if (ss == 60) {
//     ss=0;
//     mm++;
//     if (mm == 60) {
//         mm=0;
//       hh++;
//     }
//   }
//   console.log(`
//       HH-MM-SS
//       ${hh}-${mm}-${ss}`);
// }
// setInterval(clock, 1000);

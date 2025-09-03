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

const greet = (name: string) => `Hello, ${name}!`;
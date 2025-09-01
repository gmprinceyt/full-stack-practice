/**
 * Javascript run in 2 phases - (Global Exucation)
 * 1. Memory Creation Phase - Store Variable and Function 
 * 2. Code Exucation Phase - exucate line line Code 
 */

// Example
var x = 1;
console.log(x);
a()
b();

function a(){
    var x = 10;
    console.log(x)
};    
function b(){
    var x = 100;
    console.log(x)
};    

/** 
 * Memory Creation 
 * Global Exucation 
 *     Stack        __     value               __                     line number  
 * x = undifined | (Javascript Store All Value Initali Unifinded) |  8
 * a = {...} | (Javascript Store Whole in Memory) |  10
 * b = {...}  | (Javascript Store Whole in Memory) | 11
 */
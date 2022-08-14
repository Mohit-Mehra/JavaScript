// Q1. Create an array of numbers and take input from user to add number to the array
let arr = [1,12,5,6,54];
const prompt = require("prompt-sync")();
let a = prompt("Enter a number:- ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr)



// Q2. Keep adding numbers to the array in Q1 until 10 is added to the array
// let arr2 = []
// do{
//     let a = prompt("Enter a number:- ");
//     a = Number.parseInt(a);
//     arr2.push(a);
//     console.log(arr2)
// }while(a!=10);


// Q3. filter for numbers divisible by 10 from a given array
let arr2 = [1,2,35,4,56,4,100]
let n = arr2.filter((x)=>{
    return x%10==0;
})
console.log(n)


// Q4. Create an array of square of given array
let m = arr2.map((x)=>{
    return x*x
});
console.log(m)


// Q5. user reduce to calcultate factorial of a given number from an array of first n natural numbers 
let arr3 = [1,2,3,4,5,6,7,8,9]
let b = arr3.reduce((x1,x2)=>{
    return x1*x2
});
console.log(b)

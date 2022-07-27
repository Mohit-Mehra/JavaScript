// Q1. Use Logical operators to find whether the age of a person lies between 10 and 20?
let age = prompt("What is your age?")
age  = Number.parseInt(age)
if(age>10 && age<20){
console.log("Your age lies between 10 and 20")
}
else{
  console.log("Your age does not lies between 10 and 20")
}


// Q2. Demonstrate the use of switch case statement

age = prompt("What is your age?")
age  = Number.parseInt(age)
switch(age){
  case 12:
    console.log("Your age is 12")
    break
  case 13:
    console.log("Your age is 13")
    break
  case 14:
    console.log("Your age is 14")
    break
  case 15:
    console.log("Your age is 15")
    break
  case 16:
    console.log("Your age is 16")
    break
  defalut:
    console.log("You are not special")
}


// Q3. Write a program to find whether a number is divisible bt 2 and 3

let num = prompt("What is your Number? ")
num  = Number.parseInt(num)
if(num % 2 == 0 && num % 3 == 0){
  console.log("Your number is divisible by 2 and 3")
}
else{
  console.log("Your number is not divisible by 2 and 3")
}


// Q4. Write a program to find whether a number is divisible by either 2 or 3
num = prompt("What is your Number? ")
num  = Number.parseInt(num)
if(num % 2 == 0){
  console.log("Your number is divisible by 2")
}
else if(num % 3 == 0){
  console.log("Your number is divisible by 3")
}
else{
  console.log("Your number is not divisible by 2 and 3")
}

 age = 19
let a = age > 18 ? "You can drive" : "you cannot drive"
console.log(a)
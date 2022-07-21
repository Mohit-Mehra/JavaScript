//Q1 Create a variable of type string and try to add a number of it
let a = "Mohit";
let b = 10
console.log(a+b)

// Q2 Use typeof operator to find the datatype of the string
console.log(typeof (a+b))

//Q3 Create a const object in js can you change it to hold a number later?
const c = {
  name:"Mohit",
  section:4
}
console.log(c)
//Q4 Try to add a new key to the const object in Q3.
c["friend"] = "Rohit"
c["friend"] = "vaibhav"
console.log(c)

//Q5 Write a program to create a word meaning dictonary of 5 words.

const dict = {
  abjure:"Promise publically that you will give up",
  Mettle:"Spirit or strength during difficulty",
  Nimble:"Quick or agile in movement",
  Quaff:"Drink something heartily",
  Terse:"Using few words or abrupt"
}
console.log(dict)
console.log(dict.Nimble)
console.log(dict["Quaff"])
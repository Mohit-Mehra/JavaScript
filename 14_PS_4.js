// Q1. Explore the inculdes,startWith and endsWith functions of a string
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("Hello"))
console.log(text.endsWith("Hello"))



// Q2. Write a Program to convert a given string to lower case
console.log(text.toLowerCase())
console.log(text.toUpperCase())


// Q3. Extract the amount of the string
let str = "Please give Rs 1000"
let amount = str.slice("Please give Rs ".length)
console.log(amount)

// Q4. Try to change 4th character of a given string
let name = "Mohit"
name[3] = "R"
console.log(name) // it will not change because string in immutable
// Q1. Write a program to print the marks of a student in an object using for loop
let marks = {
	mohit : 98,
	shubham : 60,
	rohit : 60,
	harry : 100
}
for(let i=0;i<Object.keys(marks).length;i++){
	console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Q2. Write a program to print the marks of a student in an object using for in loop
for(let key in marks){
	console.log("The marks of " + key + " are " + marks[key])
}

// Q3. Write a program to print "try again" until the user enter the correct number
let cn = 4
let a
while(a !=cn){
	console.log("Try Again")
	a = prompt("Enter a Number ")
}
console.log("You have entered a correct number")

// Q4. Write a function to find mean of 5 numbers
const mean = (a,b,c,d,e)=>{
	return (a+b+c+d+e)/5
}
console.log(mean(2,5,3,1,5))
// Program to print first n natural number
let sum = 0
let n = prompt("Enter the value of n ")
n = Number.parseInt(n)
for(let i= 0; i<n;i++){
  sum += (i+1)
}
console.log("Sum of first " + n + " natural numbers is " + sum)

// for in loop
let obj = {
  mohit : 10,
  rohit : 20,
  raj : 25,
}
for (let a in obj){
  console.log(obj[a])
}

//for in loop
for(let b of "Mohit"){
console.log(b)
}
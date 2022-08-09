let n = [112, 154, 11, 10, 2, 20]
let m = [11, 14, 101]

console.log(n)

delete n[0] //Will not effect the length
console.log(n)
let newArray = n.concat(m) //Does not change existing arrays
console.log(newArray)

newArray = n.concat(m,n)
console.log(newArray)
m.sort() //Sort alphabhetically
console.log(m)

let compare =(a,b)=>{
    return a-b
}
m.sort(compare) 
console.log(m)

//splice and slice
let d =  n.splice(2,3,1000,12222,2222) //Will return deleted values
console.log(n,d)

console.log(n.slice(3)) //Will not change original array



console.log(n.reverse())


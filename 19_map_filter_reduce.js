let a = [10,54,131,21]

//Array Map Method
let arr =  a.map((value,index,array)=>{
    console.log(value,index,array)
    return value +1
})
console.log(arr)

//Array filter Method
let arr2 = [10,12,12,5]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2)

//Array Reduce Method
let a3 = arr2.reduce((i,j)=>{
    return i+j
})

console.log(a3)
let n = [2,6,484,12,156,654]
for(let i=0;i<n.length;i++){
    console.log(n[i])
}
//For each
console.log("forEach")
n.forEach((element)=>{
    console.log(element*element)
})


let name = "Mohit"
let arr = Array.from(name)
console.log(arr)

//fo..of
for(let i of n){
    console.log(i)
}

//for..in
for(let a in n){
    console.log(a)
}



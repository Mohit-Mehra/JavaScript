let a = prompt("Enter your age :- ");
//console.log(typeof a)
if(a<0){
  alert("This is valid age")
}
else if(a<9){
  alert("You are a kid and you can't drive")
}
else if(a<18 && a>=9){
  alert("You are a kid and you and drive after 18")
}
else{
  alert("Thid is an invalid age")
}
console.log("Done")
console.log("You can",a<18? "not drive" :"Drive")
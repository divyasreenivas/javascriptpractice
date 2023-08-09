//variables
let a = 1
let b = 2 
let ab =a+b
console.log(ab)
//functions
function fadd(){
    console.log(ab)
}
fadd()
//strings
let str1 = "divya"
let str2 = "sree"
let tstr = str1+str2
console.log(tstr)
//DOM-document object model document-HTML , object - set of html , model - making model in js 
//document.getElement.innerText,textContent,innerHTML("id ")=variable that need to be seen as output 
//if else conditions
let firstnumber=1
let secondnumber = 22
let sum = firstnumber+secondnumber
let blockjack = false
let alive = true
if(sum<21){
    console.log("sad face ")
}
else if (sum===21){
    console.log("happy face")
    blockjack = true
}
else {
    console.log("cry face")
    alive=false
}

let age = 145
if (age<=21){
    console.log("you can't enter the pub")
}
else{
    console.log("you can enter the pub ")
}
if (age<100){
    console.log("not eligible")
}
else if (age===100){
    console.log("birthday card from king")
}
else{
    console.log("not eligible you have already gotten one ")
}
//boolean 
console.log(4>9)//flse
console.log(9===9)//t
console.log(3<=6)//t
console.log(3==="3")// this is false bcz === trats the int and string different 
console.log(3=="3")//this is true bcz == trats the string and the integer same 
console.log(1>0)//t
//document.querySelector(#-id ,.-class)

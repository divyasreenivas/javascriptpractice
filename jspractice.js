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
//arrays
let array =[
    "myname",
    "myage",
    "content",
    "myskills"
]
for (let i =0 ;i<=4;i++){
    console.log(array[i])
} 
console.log(array.length)
array.push("divya")
console.log(array)
array.pop(array[0])
console.log(array)
//returning the values of function in random
let fastest =20
let fastest2=21

function fastestrace(){
    if (fastest<fastest2){
        return fastest
    }else if (fastest >fastest2){
        return fastest2
    }else {
        return fastest

    }
    
}
let fastestracer= fastestrace()
console.log(fastestracer)

function totalrace(){
    return fastest+fastest2
}
let total = totalrace()
console.log(total)
// random number in js 
let random = Math.random()*10
console.log(random)

//math.floor
let floornum=Math.floor(3.876)
console.log(floornum)
//adding floor and mathrandom
let randomnum =Math.floor(Math.random()*6)+1
console.log(randomnum)
//dice
function rooldice(){
    let random = Math.floor(Math.random()*6)+1
    return random
}
console.log(rooldice())
//logical AND operations
let hascmpltd =true
let givecertificate=true

if (hascmpltd===true && givecertificate===true){
   
        generatecertificate()
    }
function  generatecertificate(){
    console.log("certificate generation")

}
//objects
let learn ={
    name : "div",
    age :23,
    skills:"js"
}
console.log(learn.name +learn.age+learn.skills)

// to determine in document 
//html tage <p id = "player-el"></p>
//js code
let learns ={
    name : "div",
    age :23,
    skills:"js"
}

// let learning = document.getElementById("player-el")
// learning .textContent(learns.name+learn.age+learn.skills)
//objects practice 
 let person={
    name:"divya",
    age:23,
    country:"india"
 }

 //functions practice
function logData(){
    console.log(person.name +"is"+person.age+"old lives in "+person.country)
}
logData()

//objects and functions
let ages =15

if (ages<6){
    console.log("free")
}else if (ages >=6 && ages <=17){
    console.log("discount")
}else if (ages>=18 && ages <=26){
    console.log("studentdiscount")
}else if (ages>=27 && ages <=66){
    console.log("fullprice")
}else{
    console.log("senior")
}
//llops and srrays 
let country =["china ","india","us","indonesia","pakisthan"]
console.log("5 largest countries in worls ")
for (let i =0 ;i<country.length;i++){
    console.log(country[i])
}
country.push("japan")
console.log(country)
country.unshift("iceland")
console.log(country)
country.pop()
console.log(country)
country.shift()
console.log(country)

//logical operations 
let dateofmonth =87
let weekday ="friday"

if (dateofmonth ===87 &&  weekday === "friday" ){
     console.log("smokeyface")
}

//rockpapersciccor
let hand =["rock","paper","sciccor"]

function game(){
    let randomone = Math.floor(Math.random()*3)
    return (hand[randomone])
}
console.log(game())
//sortings 
let fruits =["mango","apple","mango","mango","apple"]
let mango = 0
let apple = 0
function sorting (){
    for (let i =0 ;i<fruits.length;i++){
        if (fruits[i]==="mango"){
            mango = mango +1
            console.log(mango)

        }else if (fruits[i]==="apple"){
            apple=apple+1
            console.log( apple)
        }
    }
}
sorting()






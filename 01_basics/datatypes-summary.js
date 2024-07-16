// # Primitive Datatype (call by value (copy is given not original data))
// 7 types : String , Boolean , Number, null , undefined, Symbol , BigInt

const score=100
const scoreValue=100.3
//both come under Number there is no decimal

const isLoggedIn =false
const outsidetemp =null

let userEmail; let useremail=undefined   // both get undefined value

const id =Symbol('123')
const anotherId =Symbol('123')

//console.log( id=== anotherId) // they are not same because symbol makes them unique

//const bigNumber= 1242348475193298423909238n // BigInt


// # Reference type ( Non Primitive )
//  Array, Object, Functions

// 1. JavaScript is a dynamic language and not static, which means that variables can hold 
// values of different types during runtime. Unlike languages such as Typescript or Java, 
// you don’t need to declare the data type of a variable explicitly.

// 2. JavaScript is also a weakly typed language, which means that the language allows you 
// to perform operations between different data types without explicitly converting them.

//array
const heros =["Hanuman", "shaktiman", "krish" , "Hero"]
//object
let myObj = {
    name: "Harshit",
    age: 22,
    city: "Sonipat"
}

const myFunction = function(){
    console.log("Hello! World");
}

// console.log(typeof bigNumber)  
// console.log(typeof outsidetemp) // null => object 
// console.log(typeof scoreValue) // number
// console.log(typeof myFunction) // Function Object
// console.log(typeof myObj)// object
// console.log(typeof heros) // object




//typeof operater value
//undefined => undefined
// null => object 

// https://262.ecma-international.org/5.1/#sec-11.4.3 



// *************************************** Memory **************************************************

// 2 types : Stack (Primitive) and Heap (Non-Primitive)

let myName ="Harshit"

let mySonName= myName
mySonName= "novak djokovic"

// console.log(myName);
// console.log(mySonName);  // my son name will change as a copy is created in this case



let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo =userOne

userTwo.email="harshit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email); // here both will be same as they point to same location in heap memory














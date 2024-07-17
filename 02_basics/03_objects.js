// singleton 
//object.create()

// object literals  - songleton not created when we use literals if it is through constructor then singleton is creaated

//In objects we have keys and values

const mySym = Symbol("key1")

const jsUser = {
    name : "Harshit",
    "full name": "Harshit Taneja",
    [mySym ]: "myKey1" ,//syntax to use as symbol
    age : 18,
    location : "Sonipat",
    email : "harshit@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsUser.email); //not correct way
// console.log(jsUser["email"]); 
// console.log(jsUser["full name"]); //we can not use . here because full name is string
// //console.log(jsUser.mySym); 
// console.log(jsUser[mySym]); 


jsUser.email = "harshit@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "harshit@mircosoft.com"

// console.log(jsUser)

jsUser.greeting = function(){
   console.log("Hello Js user"); 
}

// console.log(jsUser.greeting);  // undefined
// console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    // console.log(`Hello Js user ${jsUser.name} `);  //both will work
    console.log(`Hello Js user ${this.name} sir`); 
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());







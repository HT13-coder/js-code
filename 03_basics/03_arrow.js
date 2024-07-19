
// this - refers current context
const user = {
    username : "lakshay",
    price : 699,
    website: "Pornhub",
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to ${this.website}`);
        console.log(this);
    }

}


// // user.welcomeMessage()
// // user.username = "Harshit"
// // user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "harshit"
//     // console.log(this); // only works in object 
//     console.log(this.username);  // only works in object  - givves undefined
// }
// chai()

// const chai = function(){
//     let username = "harshit"
//     console.log(this.username); 
//     console.log(this);
// }
// chai()

// // Arrow function
// const chai = () => {
//     let username = "harshit"
//     console.log(this.username); 
//     console.log(this) //here thhis gives empty parenthesis
// }
// chai()


// //basic arrow function
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))


//Implicit return
// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2) //if we use {}we have to use return keyword  -> 7
// const addTwo = (num1 , num2) => {username : "Ramu"} //if we use {}we have to use return keyword -> undefined
// const addTwo = (num1 , num2) => ({username : "Ramu"}) //if we use {}we have to use return keyword  -> {username: 'Ramu'}

// console.log(addTwo(3,4))

// const myArray = [2,5,3,7,8]
// myArray.forEach(function(){})
// myArray.forEach(() => {})
// myArray.forEach(() => ())



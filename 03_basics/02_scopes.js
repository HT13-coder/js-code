// let a = 10
// const b = 20
// var c = 30

// var c=300

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// // console.log(a); // it is not printed 
// // console.log(b); // not printed
// console.log(c); //printed

//global scope
let a =300

if(true){
    // block scope 
    let a = 10
    const b = 20
    // console.log(`Inner ${a}` );

}

// for( let i =0; i <array.length() ; i++){
//     const element = array[i]
// }

// console.log(a);


////////////////////////// Nested scope ////////////////////////
// function one(){
//     const username= "Harry"
//     function two(){
//         const website ="youtube"
//         console.log(username);
//     }
//     // console.log(website)
//     two()
// }
// one()


// if(true){
//     const username = "JohnySins"

//     if(username === "JohnySins"){
//         const website = " pornhub"
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// // console.log(username);



////////////////////////////////////////////// Interesting  /////////////////////////////////////////

console.log(addOne(5))
function addOne (num){
    return num +1
}


console.log(addTwo(5)) // in this case error comes - Hoisting concept , we can not use before declaration
const addTwo = function(num){
    return num +2
}













function sayMyName() {
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("t");
}

// sayMyName()

// function addTwoNumbers(number1 , number2 ){
//     console.log(number1 + number2);
// }

// addTwoNumbers() // NaN - not a number
// addTwoNumbers(4,6)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)
// addTwoNumbers(3,undefined)

// const result = addTwoNumbers(3,5);
// console.log(`result : ${result}`);


function addTwoNumbers(number1 , number2 ){
    // let result =number1 + number2;
    // return result
    return number1 + number2
    console.log("aiodhfoianfo")
}
const result = addTwoNumbers(3,5);
//console.log(`result : ${result}`);

function loginUserMessage(username = "Sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if( !username ){ //undefined and "" are take as false
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in !`
}

// console.log(loginUserMessage("Chandra shekhar bajirao khilji"));
// console.log(loginUserMessage(1));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

// function calculateCartPrice(num1){
//     return num1
// }

// rest operator 
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200,350,599)); // now we get an array

const user = {
    username : "harshit" ,
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price in ${anyobject.price}`);
}
// handleObject(user);

// handleObject({
//     username : "ramit",
//     price : 399
// })


const myNewarray = [ 200, 700 , 399, 600]

function returnSecondValue (getArray){
    return getArray[1] 
}
console.log(returnSecondValue(myNewarray));
console.log(returnSecondValue([200,400,700,600]));
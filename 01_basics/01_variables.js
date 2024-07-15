const accountId = 14498
let accountEmail= "harshit@google.com"
var accountPassword ="12345"
accountCity ="Jaipur"
let accountState; //as we have not initialized it is taken as undefined

// accountId = 2

accountEmail="abcs@gmail.com"
accountPassword="121221"
accountCity="Sonipat"


console.log(accountId);
// console.log(accountEmail);

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])
/*
PREFER not to use var 
because of issue in block scope and functional scope
we use let and const only
*/

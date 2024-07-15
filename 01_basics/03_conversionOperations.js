let score="33abc"
score=null
score=undefined
score=true
score="harshit"


// console.log(typeof(score));
// console.log(typeof score);

let valueinNumber = Number(score)
// console.log(typeof valueinNumber);
// console.log(valueinNumber);  

//1 gives NaN  2 gives 0 in case of null   3 gives Nan in cae of undefined    
// 4 gives 1 in case of true and 0 in case of false     5 gives NaN in case of string which cannot be converted to number

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null =>0
// undefined => undefined


let isLoggedIn = 1
isLoggedIn=""
isLoggedIn="Harshit"

let booleanisLoggedIn = Boolean(isLoggedIn)

//console.log(booleanisLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "Harshit" => true

let someNumber = 40

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


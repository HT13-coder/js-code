let score="33abc"
score=null
score=undefined
score=true
score="harshit"
score=""


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
// console.log(stringNumber)
// console.log(typeof stringNumber)


//********************************************** Operations *********************************************

let x=3;
let negx= -x

// console.log(negx)

// console.log(2+2)
// console.log(2-2)
// console.log(2*3)
// console.log(2/3)
// console.log(2**4) //power
// console.log(2%3)

let str1= "Hello! "
let str2= "Harshit"

let str3= str1+str2
//console.log(str3);

// console.log("1"+2);
// console.log(1+"2");

// console.log(1+ 2+"2");
// console.log("1"+2 +2);

//console.log(3+4*5%3);

console.log(true);
console.log(+true);
console.log(+"");

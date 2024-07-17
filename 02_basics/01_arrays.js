// array - collection of multiple items under same variable name

// ** JavaScript arrays are resizable and can contain a mix of different data types.



const myArr1 = [0 ,1 ,2 ,3 ,4 ,5 ,true ,"harshit"]
const myArr = [0 ,1 ,2 ,3 ,4 ,5 ]

const myHeros = ["Shaktiman","Hanuman", "Harshit"]

const myArr2= new Array(1,2,3,4,5)

//console.log(myArr[1]);

//Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //inserts 9 at start and shifts other values by 1
// myArr.shift()    //removes element from start 
// myArr.shift()

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

const newArr=myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)



// slice , spice
console.log("A " , myArr);

const mynewarr1 =myArr.slice(1,3) //does not manipulate original array

console.log(mynewarr1);
console.log("B ", myArr);

const mynewarr2 =myArr.splice(1,3)  //manipulates original array

console.log(mynewarr2);
console.log("C ", myArr)
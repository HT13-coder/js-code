// const coding = ["js", "java" ,"ruby" , "pyhton" , "kotlin", "cpp "]

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

//for each does not return values but finter returns values
// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// let newNums =myNums.filter( (num) => num>5 )
// const newNums =myNums.filter( (num) => {
//     return num>5
// } )

// const newNums = []
// myNums.forEach((num)=>{
//     if(num>5){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


//////////////////////////////////////// MAP FUNCTION ///////////////////////////////////
// // it returns values
// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// // const newNums = myNumbers.map( (num) => num+10)
// // const newNums = myNumbers.map( (num) => {return num+10})

// //chaining
// const newNums = myNumbers
//                 .map( (num) => num*10 ) 
//                 .map( (num) => num+1 )
//                 .filter( (num) => num >= 40 )

// console.log(newNums);


/////////////////////////////////// REDUCE FUNCTION ///////////////////////////////
const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (accumulaator,currval){
//     console.log(`accumulator : ${accumulaator}  and curr val : ${currval}`);
//     return accumulaator + currval
// },0)

// const myTotal = myNums.reduce( (acc,currval) => {
//     console.log(`accumulator : ${acc}  and curr val : ${currval}`);
//     return acc+ currval
// } ,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemname : "js course",
        price : 3500
    },
    {
        itemname : "py course",
        price : 1200
    },
    {
        itemname : "dsa course",
        price : 2500
    },
    {
        itemname : "mob dev course",
        price : 6000
    },
]

// now add all prices

const totalPrice = shoppingCart.reduce( (acc,curritem) => {
    return acc+curritem.price
} ,0)
console.log(totalPrice);

// Dates

let myDate = new Date()
console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);

//let myCreateDate =new Date(2024 ,0, 16 ,16,36)
//let myCreateDate =new Date("2024-07-16")// yyyy/mm/dd
let myCreateDate =new Date("7-16-2024")// dd/mm/yyyy

// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

// Time Stamp
let myTimeStamp = Date.now()
console.log(myTimeStamp.toLocaleString);

console.log(myCreateDate.getTime()) //gives time in ms from 1 jan 1970


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    timeStyle: "long" ,
    weekday: "long"
})



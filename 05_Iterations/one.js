//for

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value : ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArray = ["flash" , "Batman" , "Superman"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i==5){
//         console.log("detected 5");
//         continue
//     }
//     console.log(`Value of i is ${i} `); 
// }

//while
// let i=0
// while(i<10){
//     console.log(`value of i is ${i}`);
//     i+=2
// }

// // let myArray = ["flash" , "Batman" , "Superman"]
// let j=0
// while(j<myArray.length){
//     console.log(`Value is ${myArray[j]}`);
//     j++
// }

//do while

// let score=11
// do {
//     console.log(`Score is ${score}`);
//     score++
// }while(score <10)


// for of

const arr = [1,2,3,4,5]

// for (const it of arr) {
//     console.log(it);
// }

const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(greet);
// }

// Maps

const map = new Map()
map.set('IN' , 'India')
map.set('US' , 'USA')
map.set('Ja' , 'Japan')
map.set('Pa' , 'Paris')
map.set('IN' , 'India')

// console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key,value] of map) {
    // console.log(key , ':-' , value);
}

const myObj = {
    "game1" : "nfs",
    'game2' : 'prince of persia',
    'game4' : 'spiderman'
}

for (const [key,value] of myObj) {
    console.log(key , ':-' , value);
}
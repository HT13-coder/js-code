let myName = "Hero Harshit"


// console.log(myName.trueLength); //create this to get actual length without spaces

let myHeeros = ['thor' , 'spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman: 'spider web',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}

Object.prototype.harshit = function(){
    console.log('Harshit is present in all objects');
}

// array , string , function --> object ---> null  (child --> parent)

// function  ----|
//               | 
// Array     ----| ----->  Object  ----->  null
//               |
// String    ----|
 
// heroPower.harshit();
myHeeros.harshit(); //works on arrays also as arrays are child of object


// injection on array and checking if it goes to object - it does not work

Array.prototype.heyHarshit = function(){
    console.log('Harshit says hellooouuuoii');
}
myHeeros.heyHarshit()
// heroPower.heyHarshit()


////////////////////////////////  INHERIATANCE ////////////////////////////////

const User = {
    name : 'dudh' ,
    emali : 'dudhu@gmail.com '
}

const Teacher = { 
    makeVedio : true
}

const TeachingSupport = { 
    isAvailable : false 
}
const TASupport = { 
    makeAssignment : 'JS Assigment',
    fullTime : true,

    __proto__ : TeachingSupport
}

Teacher.__proto__ = User


/// MODERN SYNTAAX

Object.setPrototypeOf(TeachingSupport ,Teacher) //gives access to teachingsupport to access all properties of teacher

 
let anotherUserName = "DoodhAurPani      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);

}

anotherUserName.trueLength()
"hawkeye".trueLength()
'iceTea'.trueLength()
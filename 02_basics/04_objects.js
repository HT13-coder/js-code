//const tinderUser = new Object() singleton object
//console.log(tinderUser);

const tinderUser = {}  //non singleton object

tinderUser.id ="123abc"
tinderUser.name = "harry"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com" ,
    fullname : {
        userName :{
            firstname : "Harshit",
            lastname : "Taneja"
        }
    }
}



// console.log(regularUser.fullname)
// console.log(regularUser);
// console.log(regularUser.fullname.userName.firstname);

//merging objects
const obj1 = { 1 : "a", 2: "b"}
const obj2  = { 3 : "c", 4: "d"}
const obj4  = { 5 : "e", 6: "f"}


//this not correct
// const obj3 = {obj1 , obj2}

//const obj3 = Object.assign( {} , obj1 , obj2 ,obj4) 

//spread operator
const obj3 = {...obj1, ...obj2 , ...obj4}
// console.log(obj3);

// array of object

const users =[
    {
        id: 1,
        email : "dafda@gmail.com"
    },
    {
        id: 2,
        email : "abdfa@gmail.com"
    },
    {
        id: 3,
        email : "abasj@gmail.com"
    },
    {
        id: 4,
        email : "halka@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // Note : this gives an array of keys - this is very useful 
// console.log(Object.values(tinderUser));  // Note : this gives an array of keys - this is very useful 
// console.log(Object.entries(tinderUser));  // Note : this gives an array of keys - this is very useful 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));




//************************************  destructuring  ****************************************/
const course = {
    corsename : "web development bootcamp" ,
    corseprice : "3499" ,
    courseinstructor : "harshit Sir"
}

//  course.courseinstructor

const {courseinstructor} = course
console.log(courseinstructor);

const {courseinstructor : instructor} = course
console.log(instructor);


// used in react - destructuring
const navbar = ({company}) => {

}

navbar(company = "TCS")

// // Json - javascript object notation
// {
//     "name": "hitesh" ,
//     "coursename" : "js in hindi" ,
//     "price" : "free"
// }

//other type of api 
[
    {},
    {},
    {}
]
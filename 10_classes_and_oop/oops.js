// OBJECT LITERAL
const user = {
    username: 'Harshit',
    loginCount : 9 ,
    signedIn : true,

    getUserDetails: function(){
        // console.log('Got user details from database');
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// // console.log(user.username); 
// console.log(user.getUserDetails());  
// console.log(this);


// CONSTRUCTION FUNCTION
// const promiseOne = new Promise() //new is construnctor function - allows to create multiple instances from single object instance 

const date = new Date() 

function User(username, logincount , isloggedin){
    this.username = username
    this.loginCount =logincount
    this.isloggedin = isloggedin

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this
}
const userone = new User('harshu' , 5 ,true)
const usertwo = new User('nimbu pani' , 2 ,false) 
// console.log(userone); //prints usertwo values if we dont use new
// console.log(usertwo);
console.log(userone.constructor);




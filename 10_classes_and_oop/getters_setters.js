class User {
    constructor(email, password){
        this.email=email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }

}

const harshit  = new User('harsit@gmail.com' , 'abcd')
console.log(harshit.password);
console.log(harshit);
console.log(harshit.email);



 
///////////////   Older Method    ///////////////
Object.defineProperty(this, 'email', {
    get: function() {
        return this._email.toUpperCase()
    },
    set: function(value) {
        this.email = value
    } 
})

Object.defineProperty(this, 'password', {
    get: function(){
        return this._password.toUpperCase()
    },
    set: function(value) {
        this._password = value
    }   
})


//////////////////    Object get set   //////////////////////


const User2 = {
    _email: 'h@hc.com',
    _password: "abc",
    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User2)
console.log(tea.email);

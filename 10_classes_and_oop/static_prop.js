class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username :- ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

// const aditi = new User('Aditi')
// console.log(aditi.createId());

class Teacher extends User{
    constructor(username ,email){
        super(username)
        this.email = email 
    }
}

const iphone = new Teacher('iphone 15 plus', 'apple.com')

iphone.logMe()
console.log(iphone.createId());
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username , email, password){
        super(username)  // In class we super  and we dont write this in super 
        this.email = email 
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
} 

const chai = new Teacher('chai' , 'chai@teacher.com' , '123')

chai.addCourse()
chai.logMe()

const rabdi = new User('rabdi faluda')
rabdi.logMe()

console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
 
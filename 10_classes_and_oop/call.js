function setUserName(username){
    //complex db calls
    this.username = username
    console.log('called');
}

function createUser(username,  email , password){
    // setUserName(username)// this does not call the funciton // it is being called but we have to hold its reference also after getting called it removes from callstack
    setUserName.call(this , username) //call sends current execution context to other function
    this.email = email
    this.password = password
}

const doodh = new createUser('doodh', 'doodh@gyahoo.com' , '1234')
console.log(doodh);
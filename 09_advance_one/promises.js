// fetch('https://something.com').then().catch().finally() 

// see site https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// const promiseOne  = new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls , cryptography , network calls
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve() // this is connected to then( ) 
//     } ,1000)
// })

// promiseOne.then(function(){
//     console.log('Promise consumed');
// })

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('Asyn task 2');
//         resolve()
//     } , 1000)
// }).then(function(){
//     console.log('Asyncc 2 resolved');
// })

// const promiseThree  = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({userName : 'Pani' , email: 'pani@example.com'})
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({userName: 'Harshit taneja' , password : '123'})
//         }else{
//             reject('ERROR : 404 || Something Went Wrong')
//         } 
//     } ,1000)
// })

// promiseFour
// .then(function(user){
//     console.log(user);
//     return user.userName
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=> console.log('The promise is either resolved or rejected'))


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         const error = true
//         if(!error){
//             resolve({language : 'Javascript' , password: '123'})
//         }
//         else{
//             reject('ERROR : JS went wrong')
//         }
         
//     } , 1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);

//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// FETCH USING ASYNC AWAIT

// async function getAllUsers(){

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') //since it is a network request it will take time so we have to use await  // this fetch gives a promise
//         // console.log(response);
//         const data = await response.json() //this also takes time so we have to use await here too
//         console.log(data);

//     } catch (error) {
//         console.log('E : ', error);
//     }
    
// }
// getAllUsers()

//FETCH USING THEN 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => { 
    console.log(data);
})
.catch((error) => console.log(error) )
.finally()
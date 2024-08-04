const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI')

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

// const myNewObj = Object.create(null)
const chai = {
    name : 'ginger chai',
    price : 250 , 
    isAvailable : true,

    orderChai : function(){  // isme loop as it is print hojaega
        console.log('chai nhi bani');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

Object.defineProperty(chai , 'name' , {
    // writable : false,
    enumerable: false, //we wont be able to iterate
    // configurable:false
})

// console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

for (let [key,value] of Object.entries(chai) ) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}


const myObject = {
    js : "javascript",
    cpp : "C++" ,
    rb : "ruby" ,
    swift : "swift by app"

}

for (const key in myObject) {
    // console.log(key);
}
for (const key in myObject) {
    // console.log(key , ':-' ,myObject[key]);
}

const progrramming =["js" , "rb" , "py" , "java" , "cpp"]

for (const key in progrramming) {
    // console.log(key ," " , progrramming[key]);
    
}

// for in on map doesnt work
const map = new Map()
map.set('IN' , 'India')
map.set('US' , 'USA')
map.set('Ja' , 'Japan')
map.set('Pa' , 'Paris')
map.set('IN' , 'India')

for (const key in map) {
    console.log(key);
}
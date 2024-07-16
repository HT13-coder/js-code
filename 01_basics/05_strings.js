const name = "Harshit"
const repoCount = 50

//console.log(name + repoCount + " Value"); //not good way

//now we use backtags - coz we get string Interpolation ie we can inject variables in placeholders

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// declaring a string another way

const gameName = new String ("Harshit-Ht")

//console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("H"));
// console.log(gameName.indexOf("r"));

const newString = gameName.substring(1,5)  //arsh last string not included
//console.log(newString);

const anotherString = gameName.slice(-7,5) //we can give negative values in this it starts from back then
//console.log(anotherString);

const newStringOne ="     Harshit    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url= "https://harshit.com/harshit%20taneja"

// console.log(url.replace('%20','-'));
// console.log(url.includes("harshit%"));
// console.log(url.includes("ascd"));

//to convert string to array - we use split
const str="Hi hello-my-name is-harshit-taneja."
console.log(str.split(' '));
console.log(str.split('-'));

//concat
const str1="hello"
const str2="world"

console.log(str1.concat(' ',str2," !"))
console.log(str1.bold())





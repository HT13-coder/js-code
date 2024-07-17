const marvel_heros = ["Captain America", "Thor" , "Iron Man" ] 
const dc_heros = ["Aquaman", "Batman" , "Superman" ]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// console.log(marvel_heros[3][1])


// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)

// Spread operator - same like concat in concat we can join only 2 arrays but in this there is no limit
// const all_new_heros= [ ...marvel_heros , ...dc_heros ]
// console.log(all_new_heros);

const arr = [1 , 2 , 3 , [ 4 , 5 , 6 ] , 7 ,[ 6, 7 ,[ 8, 9 ]]]

const realarr =arr.flat(Infinity)
// console.log(arr);
// console.log(realarr);

// console.log(Array.isArray("hitesh"))
// console.log(Array.isArray(arr))

// console.log(Array.from("Hitesh"));
// console.log(Array.from({name: "Hatshit"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(100,200,300));
console.log(Array.of(score1,score2,score3));






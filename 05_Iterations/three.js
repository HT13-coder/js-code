// for each 

const coding = ["js", "java" ,"ruby" , "pyhton" , "kotlin", "cpp "]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item , index , arr)=>{
//     console.log(item ,index , arr);
// })

const myCoding = [
    {
        language : "javascript",
        filetype : "js"
    },
    {
        language : "java",
        filetype : "java"
    },
    {
        language : "python",
        filetype : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language ,item.filetype);
} )
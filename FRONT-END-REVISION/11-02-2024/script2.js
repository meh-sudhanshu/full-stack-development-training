const obj = {
    name:"sudhahshu",
    age:25,
    students:["Vandana","Nitya","Navya","Nitin"],
    information:{
        college:"CMRCET",
        tpoHead:"Mr. Raj kishor sir"
    }
}

// console.log(obj["name"])
// console.log(obj.name)

// console.log(obj.information.tpoHead)
// console.log(obj["information"]["tpoHead"])

// console.log(obj.length) obj.length is undefined

// let key1 = "name"
// console.log(obj[key1])

// for(var key in obj){
//     console.log(key," ",obj[key])
// }

// Object.keys(obj).forEach(key =>{
//     console.log(key, obj[key])
// })


// Object.values(obj).forEach(value =>{
//     console.log(value)
// })

Object.entries(obj).forEach(([key,value])=>{
    console.log(key,value)
})


// deep copy, shallow copy


// const obj2 = {
//     name:"sudhanshu",
//     information:{
//         age:25,
//         height:"5ft 7inch"
//     }
// }

// const deepCopy = {
//     name:"sudhanshu",
//     age:25,
//     height:"5ft 7inch"
// }

// for-loop, while-loop, for-in, for-of,forEach, objects, Object.keys, Object.Values,
// Object.entries, IIFE

// on objects we can only execute for-in loop and forEach method


// In the next class, we will start with methods on an array
// deep copy, shallow copy of array as well as objects




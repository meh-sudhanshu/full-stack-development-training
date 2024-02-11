

const arr1 = [1,2,3]

//console.log(arr.length)
//console.log(arr.length)


// const obj = {
//     x:10,
//     testFun: (arg)=>{
//         console.log(arg)
//     }
// }
// obj.x
// obj.testFun(10000)

// method is a function associated with an object

// push --> used to push an elemnet to the array at last

console.log(arr1)
arr1.push("Hi vandana and navya")
console.log(arr1)
arr1.pop() // pop will remove last element 
console.log(arr1)

arr1.shift() // shift removes first elemnet from an array

console.log(arr1)

arr1.unshift("Hi vandannnnnnaaaaaaa")
console.log(arr1)


console.log(arr1.includes("Hi vandannnnnnaaaaaaa")) // includes will return true or false based on if the element exist in the array or not



const arr2 = [10,23,23,34,54,67,78,89,90]

const selectedElements = arr2.slice(2,6)
console.log(selectedElements)


const arr3 = arr1.concat(arr2)
console.log(arr3)


const arr4 = arr2.concat(arr1)
console.log(arr4)


const arr5 = [9,1,2,40]

const result = (value)=> value<10;

console.log(arr5.every(result))

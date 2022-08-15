const arr = ["bipin","ram","shyam","dog","cat"];

// taake copy of array form index 0  to index 3 and return the copy i.e
//  ['bipin', 'ram', 'shyam' ]

const newArr =  arr.slice(0,2);
console.log(newArr);
console.log(arr);





// remove the index form 0 to 2 and return removed item i.e
// [ 'bipin', 'ram' ]
// it is impure function

console.log(arr.splice(0,2));
console.log(arr);

// const newArr = [...arr];
// console.log(newArr);
// console.log(arr);

// const obj = {
//     name:"bipin",
//     rollno:7,
//     college:"kathford"
// }
// const newObj = {...obj,address:["ktm","butwal"]}
// console.log(newObj);
// console.log(obj);
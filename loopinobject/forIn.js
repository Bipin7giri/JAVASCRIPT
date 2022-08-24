const arr = [5,6,7,77,88];
const obj = {
    'arr' : '22',
    name: "bipin" 
}
// for(let i in arr){
//     console.log(i+"in array");
// }
for(let i in obj){
    console.log(i+"in object");
}

for(let i of arr){
    console.log(i+"of array");
}
// for(let i of obj){
//     console.log(i);
// }
const arr = [5,6,7,77,88];
const obj = {
    'arr' : '22',
    name: "bipin" 
}
// forEach is capable if looping but it cant return;
// => it also can have both item and index as paramater;
// => it is more readable then traditional for loop;


for(let i = 0; i <arr.length; i ++){
    console.log(arr[i]);
}
const mulArr = arr.forEach((item,index)=>{
    console.log(item);
    return "hi";
})
mulArr;
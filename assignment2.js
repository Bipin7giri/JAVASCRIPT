const arr = [1,3,4,5,67,8,32]

const countArray = (arr)=>{
    let count = arr.length;
    return `the length of array is ${count}`;
}
console.log(countArray(arr));


const addToArray = (arr)=>{
  return  arr.push(32,44,55,65);
}

addToArray(arr);

const removeFromArray = (arr)=>{
    return arr.pop();
}
removeFromArray(arr);

console.log(arr);

const filterArray = arr.filter((item)=>{
    if(item!==32){
        return(item);
    }
})
console.log(filterArray);
 
const concact = filterArray.map((item,index)=>{
return `${item}  hello`;
});
console.log(concact);
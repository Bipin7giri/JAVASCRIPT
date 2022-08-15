const testArr = [32,54,231,555];
const nameArr = ["bipin","ram","giri"];
// const squareItem = (item,index)=>{
//     const result = item*item;
//     return console.log(result);
// }
// testArr.map((item,index)=>{
//     return console.log(item+"hi");

// })

const check =  nameArr.filter((item)=>{
if(item!=="bipin"){
    return(item);
}
})
console.log(check);
console.log(nameArr);

// testArr.filter((item)=>{
//     if(item<=50){
//         return console.log(item);
//     }
//     else{
//         return false;
//     }
// })
console.log(testArr);

// testArr.map(function squareItem(item,index){
//     return console.log(item*item);
// });


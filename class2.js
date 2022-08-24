const arr = [32,42,412,433]
// let sum = 0;
// arr.map((item,index)=>{
// sum = sum +item;
// })
// console.log(sum);


// const z = arr.reduce((accmulator,currentValue)=>{
//     console.log(currentValue);
// // accmulator = accmulator + currentValue
// // return accmulator;
// },10) 
// z;



const x = [{
    "food item":"Burger",
    price:500
},{
    "food item":"Pizza",
    price:400
},{
  "food item":"Momo",
  price:200
}]

const totalPrice = x.reduce((acc,cur)=>{
return acc = acc+cur.price;
},0)

console.log(totalPrice)


// const oldString = 'Ram,Bahadur,Thapa'

// oldString.split(',')
// console.log(typeof(oldString))




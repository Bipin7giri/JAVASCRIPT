const arr = ["animal:donkey","animal:monkey","human:ram","human:bipin","animal:cat","human:bhuwan","human:shyam","animal:lion"];
let animal = [];
let human = [];
let key = [];


const splitArr  = arr.map((item)=>{
    return item.split(":");
 })
 splitArr.map((item,index)=>{
  
    key.push(item[0])
  if(item[0]==="animal"){
    animal.push(item[1]);
  }
  else if(item[0]==="human"){
    human.push(item[1]);
  }
  } )
 

 const uniqueKey = [...new Set(key)];

 
const obj = {};
    
uniqueKey.reduce((accmulator, currentValue)=>{
  obj[accmulator]=animal;
  obj[currentValue]=human;
})
   
console.log(obj);
const arr = ["animal:donkey","animal:monkey","human:ram","human:bipin","animal:cat","human:bhuwan"];
let animal = [];
let human = [];
let key = [];


const splitArr  = arr.map((item)=>{
    return item.split(":");
 })
 console.log(splitArr);

 for(let i = 0; i<splitArr.length; i++){
    key.push(splitArr[i][0]);
  if(splitArr[i][0]==="animal"){
    animal.push(splitArr[i][1]);
  }
  else if (splitArr[i][0]==="human"){
    human.push(splitArr[i][1]);
  }
 }
 const uniqueKey = [...new Set(key)];
 
const obj = {};

    uniqueKey.forEach((element, index) => {
            obj[element] = [];
            if(element==="animal"){
                obj[element] = animal;
            } 
            else{
                obj[element] = human;
            }
    });
console.log(obj);






const firstName = ['bipi  n   ','Sandesh','bhUwan','loke','bishal']
const obj = {
    'bipin   ':'giri',
    'Bhuw   an':'kc',
    'sandesh':'dahal',
    'Bishal   ':'gharti',
    'loke':'magar'
}
const tempObj = Object.keys(obj).reduce((accumulator,key)=>{
  accumulator[key.toLowerCase().trim().split(" ").join("")]=obj[key];
  return accumulator;
},{})
tempObj;

// const g = {}
// g["name"]="bipin"
// console.log(g)

const names = firstName.map((item,index)=>{
 let lowerItem = item.toLowerCase().trim().split(" ").join("");
  return tempObj[lowerItem] ? `${lowerItem} ${tempObj[lowerItem]}`:item;
})
console.log(names)
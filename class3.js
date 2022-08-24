const firstName = ['bipin','bhuwan','sandesh','loke','bishal']
const obj = {
    'bipin':'giri',
    'bhuwan':'kc',
    'sandesh':'dahal',
    'loke':'gharti',
    'bishal':'magar'
}
// let surName = [];

const newName  =firstName.map((item,index)=>{
 if(Object.keys(obj)[index]===item){
   return`${item} ${Object.values(obj)[index]}` 
 }
 
})
// const finalArray = [...firstName,...surName]
console.log(newName);





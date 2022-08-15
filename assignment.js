// const arr = ["hello","wellcome","goodEvening"];

// const addMessage=(message)=>{
// let add = [];
//    for(let i=0; i<arr.length;i++){
//     add.push(arr[i]);
//    }
//    add.push(message);
//    console.log(add);
//    console.log(arr);
// }

// arr.push("test")
// addMessage("hi");

// const newMessage = (val)=>{
//    let tempArray = [...arr];
//    tempArray.push(val);
//    console.log(tempArray);
// }
// newMessage("hiiiiiiiiiii");




const ages = [32, 33, 55, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {

  if(age>=18){
   return age;
  }
  else{
   return false;
  }
}
console.log(result);
 


// IN JAVASCRIPT EVERYTHING IS OBJECT



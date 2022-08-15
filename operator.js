const multiply = (a,b)=>{
let mul =[];
    if(a.length===0){
        return console.log('no array');
    }
    for(let i =0; i<a.length; i++){
       mul.push(a[i]*b);
    }
    console.log(mul);
}
multiply([1,2,3],2);


var candy =[];
//block1
if(candy){
console.log('i am trues');
}
//block2
if(candy==true){
console.log('i am true')
}

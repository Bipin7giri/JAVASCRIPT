let emptyString = "";


const concact = (name)=>{
    let result = Number(name+123);   
    return result;
}
console.log(concact(emptyString));


let onlyString = concact(emptyString);
console.log(onlyString++);
console.log(onlyString);

const checkNumber = (num)=>{
    if(num>20){
        return `${num} is greater than 20`;
    }
    else if(num<20){
        return `${num} is less than 20`;
    }
    else{
        return `equal`;
    }

}
const capitalString = checkNumber(onlyString);

console.log(capitalString);

const changeToCaptial = (string)=>{
    return string.toUpperCase(); 
}

console.log(changeToCaptial(capitalString));
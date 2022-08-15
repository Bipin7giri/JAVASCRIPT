// const animalArr = ["cow","monkey","donkey"];
// // console.log(animalArr[2]);

// const nestedArr = [
//     ["cow","donkey","monkey"],
//     ["Nepal","USA","Canada"]
// ]
// console.log(nestedArr[0]);
const tempObj = {
       "first Name":"bipin",
       lastName:"giri",
       "address":{

        lalitpur:["patan","balkumari"],

        ktm:{
        bagbazar:["bagbazar1","bagbazar2"]
       
    }
    }
};
// console.log(tempObj["first Name"]);
// console.log(tempObj["address"].lalitpur[0]);
console.log(tempObj["address"].ktm.bagbazar[0]);

const test = {
    name:["bipin","shyam"],
    lastName:["giri","kc"],
    testFunction:(a)=>{
        console.log(a+"is the number" );
    }
}



console.log(test.name[0]);
console.log(test.testFunction(1));



const tempObbj ={
    id:2,
    name:'bipin',
    surname:'giri',
    'postal Code':2112
}
console.log(Object.keys(tempObbj));
console.log(Object.values(tempObbj));


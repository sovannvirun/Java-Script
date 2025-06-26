

//syntax : 
// function functionName(parameter, parameter 2,.....){


//}

// example : 

function message()
{
   console.log("my message !!")
}
function addTwoNumber(a,b){
    return a + b;
}
console.log(addTwoNumber(2,3))
function findEvennuminarr(arr){

    let filterpro=arr.filter((number)=>number%2===0)
    return filterpro;
}
message()

console.log(findEvennuminarr([2,4,1,6,8,10]))
console.log(findEvennuminarr([20,14,3,11,79]))

function sumNumber(a){
    let s = 0;
    for(let i = 0; i< a.length; i++){
        s = s + a[i];
    }
    return s;
}
console.log(sumNumber([1,2,3,4,5,6,7]));
console.log(sumNumber([20,39,1]))


//arrow functions

let myVeriable = ()=>{
    console.log("Hello ");
}
myVeriable();

function findDis(total){
    if (total>500){
        discount=20;
    }else if(total>400){
        discount=15;
    }
    else if(total>300){
        discount=10;
    }
    else if(total>200){
        discount=5;
    }
    else if(total>0){
        discount=0;
    }
    return discount;
}
let result = findDis(300)+10;
console.log(result)
console.log(findDis(500))
console.log(findDis(501))

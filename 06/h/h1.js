function sum(array){
    let sum=0;
    for( let index=0;index<array.length;index++){
        sum=sum+array[index]
    }
    return sum
}
console.log(sum([10,20,15,40,5]))


// index = 0; index < 5; true;
    //sum = sum + array[index] = 0 + 10 = 10; index++;

// index = 1; index < 5; true;
    //sum = 10  + 20 = 30;

function minMax(arr){
    const result={
        min : arr[0],
        max: arr[0],
    };
    for(let i=0;i<arr.length;i++){
        if (arr[i]>result.max){
            result.max=arr[i];
        }
        if(arr[i]<result.min){
            result.min=arr[i];
        }
    }
    return result
}
console.log(minMax([1,2,3,-5,-4,-100,100]))
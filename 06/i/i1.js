function countPosition(nums){
    let result=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            result=result+1;
        }
    }
    return result;
}
console.log(countPosition([2,-3,10,-5,6]));
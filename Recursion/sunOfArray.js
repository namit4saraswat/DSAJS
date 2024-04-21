function sum(nums,n){
    if(n===0){
        return 0
    }
    
    return nums[n-1] + sum(nums,n-1) 
}

console.log(sum([1,1,1,1,1,1,1,1],8))
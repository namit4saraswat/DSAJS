function largestElement(nums, l){
    if(l===1){
        return nums[0]
    }
    
    return Math.max(largestElement(nums,l-1), nums[l-1])
}

console.log(largestElement([1,5,2,6,17,2,1],7))
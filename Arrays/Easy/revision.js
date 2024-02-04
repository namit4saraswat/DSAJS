var minSubArrayLen = function(target, nums) {
    let rightEdge=0
    let leftEdge=0
    let totalSum = nums[leftEdge]
    let result=Infinity
    if(totalSum>=target){
        return 1
    }
    while(rightEdge<nums.length){
        if(totalSum>=target){
            result = Math.min(rightEdge-leftEdge+1, result)
            totalSum = totalSum - nums[leftEdge]
            leftEdge++
        }else{
            rightEdge++
            totalSum = totalSum + nums[rightEdge]
        }
    }
    return result==Infinity ? 0 : result
};

console.log(minSubArrayLen(11,[1,1,1,1,1,1,1,1,1]))
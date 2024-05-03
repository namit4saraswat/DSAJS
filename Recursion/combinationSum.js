function combinationSumUtil(nums,i,ans,out,tSum){
    if(i===nums.length){
        if(tSum===0){
            out.push([...ans])
        }
        return 
    }
    
    if(nums[i]<=tSum){
        ans.push(nums[i])
        combinationSumUtil(nums,i,ans,out,tSum-nums[i])
        ans.pop()
    }
    combinationSumUtil(nums,i+1,ans,out,tSum)
    return out
}

var combinationSum = function(candidates, target) {
    return combinationSumUtil(candidates,0,[],[],target)
};

console.log(combinationSum([2,3,5],8))
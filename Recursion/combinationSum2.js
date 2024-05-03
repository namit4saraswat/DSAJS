function combinationSumUtil(nums,i,ans,out,tSum){
    if(i===nums.length){
        if(tSum===0){
            out.push([...ans])
            console.log(ans)
        }
        return 
    }
    
    for(let idx=i;idx<nums.length;idx++){
        if(i<idx && nums[idx]===nums[idx-1]){
            continue
        }
        if(nums[i]>tSum){break}
            ans.push(nums[idx])
            combinationSumUtil(nums,idx+1,ans,out,tSum-nums[idx])
            ans.pop()   
    }
}

var combinationSum = function(candidates, target) {
    return combinationSumUtil(candidates,0,[],[],target)
};

console.log(combinationSum([1,1,1,2,2],4))
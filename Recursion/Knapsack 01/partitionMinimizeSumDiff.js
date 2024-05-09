
function isSubsetSum(arr,i,p1sum,p2sum,ans){
    if(i===arr.length){
        return 0
    }
    
    ans[0] = Math.min(Math.abs(p1sum-p2sum),ans[0])

    
    isSubsetSum(arr,i+1,p1sum-arr[i],p2sum+arr[i],ans)
    
    isSubsetSum(arr,i+1,p1sum,p2sum,ans)

    return ans[0]

}

var minimumDifference = function(nums) {
    let sum=0
    let ans=[Infinity]
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    if(sum===0 && nums.length===2){
        return Math.abs(nums[0]-nums[1])
    }
    return isSubsetSum(nums,0,sum,0,ans)
};

console.log(minimumDifference([76,8,45,20,74,84,28,1]))

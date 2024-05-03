
function isSubsetSum(arr,n,p1sum,p2sum,ans){
    if(n===0){
        return 0
    }
    
    ans[0] = Math.min(Math.abs(p1sum-p2sum),ans[0])
    console.log(p1sum + " " + p2sum)
    
    isSubsetSum(arr,n-1,p1sum-arr[n-1],p2sum+arr[n-1],ans)
    
    isSubsetSum(arr,n-1,p1sum,p2sum,ans)

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
    return isSubsetSum(nums,nums.length,sum,0,ans)
};

console.log(minimumDifference([76,8,45,20,74,84,28,1]))

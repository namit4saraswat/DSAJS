/**
 * @param {number[]} nums
 * @return {number}
 */

function robUtil(nums,n,dp,ans){
    if(dp[n-1]>0){
        return dp[n]
    }
    if(n===2){
        return Math.max(nums[0],nums[1])
    }
    if(n===1){
        return nums[0]
    }
    
    return  dp[n] =Math.max(nums[n-1] + robUtil(nums,n-2,dp,ans) , robUtil(nums,n-1,dp,ans))

}

var rob = function(nums) {
    let ans=0
    let dp=Array(100).fill(0)
    ans = robUtil(nums,nums.length,dp,ans)
    return ans
};

console.log(rob([2,7,9,3,1]))
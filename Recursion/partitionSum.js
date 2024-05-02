/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let dp = Array(200).fill(Array(10000).fill(-1))
function isSubsetSum(arr,n,sum){
    if(sum===0){
        return true
    }
    if( n===0){
        return false
    }
    if(dp[n-1][sum]!=-1){
        
        return dp[n-1][sum]
    }

    if(sum[n-1]>sum){
        return dp[n-1][sum]= isSubsetSum(arr, n - 1, sum)
    }else{
        return dp[n-1][sum] =isSubsetSum(arr,n-1,sum-arr[n-1])  || isSubsetSum(arr,n-1,sum)   
    }
    
}

var canPartition = function(nums) {
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    if(isSubsetSum(nums,nums.length,sum/2)){
        return true
    }else{
        return false
    }
};

console.log(canPartition([28,4,26,1,36,42,10,32,27]))

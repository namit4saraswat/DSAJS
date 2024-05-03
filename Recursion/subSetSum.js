/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let dp = Array(2000).fill(Array(2000).fill(-1))
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

console.log(isSubsetSum([3, 34, 4, 12, 5, 2],6,38))
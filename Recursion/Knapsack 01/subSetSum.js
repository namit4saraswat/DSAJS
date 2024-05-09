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

function isSubsetSum2(arr,i,sum){
    
    if(i===arr.length){
        console.log(sum)
        return 
    }

    isSubsetSum2(arr,i+1,sum+arr[i])
    isSubsetSum2(arr,i+1,sum)
    

}


//Top down appraoch
function subsetSum3(nums,sum,n){
    let t = Array(n+1).fill(Array(sum+1))
    for(let i=0;i<=n;i++){
        for(let j=0;j<=sum;j++){
            if(i===0){
                t[i][j]=false
            }
            if(j===0){
                t[i][j]=true
            }

        }
    }

    for(let i=1;i<=n;i++){
        for(let j=1;j<=sum;j++){
            if(nums[i-1]<j){
                t[i][j]=    || t[i-1][j]
            }else{

            }
            
        }
    }
    
}

console.log(subsetSum3([3, 34, 4, 12, 5, 2],7,6))
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function isSubsetSum(arr,n,p1sum,p2sum,d){
    if(n===0){
        return 0
    }
    
    if(Math.abs(p1sum -p2sum)===d){
        return 1
    }
    
    l=isSubsetSum(arr,n-1,p1sum-arr[n-1],p2sum+arr[n-1],d)
    
    r=isSubsetSum(arr,n-1,p1sum,p2sum-d,d)

    return l+r
}

var findTargetSumWays = function(nums, target) {
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    if(target>sum){
        return 0
    }
    return isSubsetSum(nums,nums.length,sum,0,target)
};


console.log(findTargetSumWays([1,1,1,1,1],3))
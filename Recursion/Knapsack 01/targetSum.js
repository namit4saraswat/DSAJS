/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function isSubsetSum(arr,i,p1sum,p2sum,d){
    if(i===arr.length){
        return 0
    }
    
    if(Math.abs(p1sum-p2sum)===d){
        console.log(p1sum + ' ' +p2sum)
        return 1
    }
    
    return isSubsetSum(arr,i+1,p1sum-arr[i],p2sum+arr[i],d) + isSubsetSum(arr,i+1,p1sum,p2sum,d)
}

var findTargetSumWays = function(nums, target) {
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    if(target>sum){
        return 0
    }
    return isSubsetSum(nums,0,sum,0,target)
};


console.log(findTargetSumWays([3,3,4,4],0))
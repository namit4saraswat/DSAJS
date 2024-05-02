/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let dp = Array(22).fill(Array(22).fill(-1))
let p2=0
let p1=0
function isSubsetSum(arr,n,p1sum,p2sum){
    if(n===0){
        return
    }
    
    if(p1sum===p2sum){
        return true
    }
    
    if(isSubsetSum(arr,n-1,p1sum-arr[n-1],p2sum+arr[n-1])){
        return true
    }
    
    if(isSubsetSum(arr,n-1,p1sum,p2sum)){
        return true
    }

}

var canPartition = function(nums) {
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    if(isSubsetSum(nums,nums.length,sum,0)){
        return true
    }else{
        return false
    }
};

console.log(canPartition([1,5,11,5]))

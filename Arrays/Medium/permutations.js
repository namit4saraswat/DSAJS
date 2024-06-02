/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length===1){
        return
    }
    for(i in nums){
        let n = nums.pop()
    }
    
    permute(nums)
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    nums = nums.sort(function(a,b){return a-b})
    let ans = []
    let lo=0
    let hi=nums.length-1
    while(lo<hi){
        if(nums[lo]+nums[hi] === target){
            ans.push([lo,hi])
            return ans
        }else if(nums[lo]+nums[hi]<target){
            lo++
        }else{
            hi--
        }
    }
};



console.log(twoSum([3,2,4], 6));
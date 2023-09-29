/**
 * @param {number[]} nums
 * @return {string[]}
 */
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
var summaryRanges = function(nums) {
    let ans = [];
    let count=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]+1 != nums[i+1]){
            if(count === nums[i]){
                ans.push(nums[i].toString())
            }else{
               ans.push((count + "->" + nums[i]));
            }
            count=nums[i+1];
        }
    }
    return ans;
};

console.log(summaryRanges([0,2,3,4,6,8,9]))
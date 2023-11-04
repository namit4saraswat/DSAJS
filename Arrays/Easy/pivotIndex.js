/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((a, b) => a + b, 0)
    let val = 0;
    for(let i=0;i<nums.length;i++){
        if(sum - nums[i] - val === val){
            return i;
        }
        val = nums[i] + val;
    }

    return -1;
};

console.log(pivotIndex([2,1,-1]))
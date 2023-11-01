/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            console.log( [nums[count], nums[i]]);
            [nums[count], nums[i]] = [nums[i], nums[count]];
            count++;
        }
    }
};

console.log(moveZeroes([0,1,0,2,3]));
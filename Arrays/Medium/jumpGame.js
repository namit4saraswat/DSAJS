/**
 * @param {number[]} nums
 * @return {boolean}
 */

// nums = [2,3,1,1,0]
var canJump = function(nums) {
    let lastPosition = nums.length-1
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]>=lastPosition-i){
            lastPosition = i
        }
    }
    return lastPosition===0
};


// console.log(canJump([1,2,5,8,0,0,0,3]));// "true" + 
// console.log(canJump([4,3,2,0,0,8]));//"false" +
// console.log(canJump( [2,0,1]));//"true" +
// console.log(canJump( [2,0,1,0]));//"true" +
// console.log(canJump([3,2,1,0,4]));//"false" +
// console.log(canJump([3,1,0,0]));//"true" + 
// console.log(canJump( [2,0,0]));//"true" +
// console.log(canJump( [1,0,1,0]));//"false" +
// console.log(canJump([1,2,0,1]));//"true" + 
// console.log(canJump([3,0,8,2,0,0,1]))//"true"
console.log(canJump([1,1,0,0]));//false
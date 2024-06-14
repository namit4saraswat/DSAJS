/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = -1;       
    let currentEnd = 0;  
    let farthest = 0;   

    for(let i=0;i<nums.length;i++){
        farthest = Math.max(i+nums[i],farthest)
        if(i === currentEnd){
            jumps++
            currentEnd = farthest
        }
    }
    return jumps
};

console.log(jump([2,3,3,0,0,4]))
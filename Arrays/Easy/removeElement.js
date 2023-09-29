/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let start=0
    let end = nums.length-1;
    while(start <= end){
        if(nums[start] === val){
            nums[start] = nums[end];
            end--
        }else {
            start++;
        }
    }
    console.log(nums);
    return end+1;
    
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));
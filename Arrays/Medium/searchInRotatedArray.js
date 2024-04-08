/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left=0
    let right=nums.length-1
    while(left<right){
        let mid=left+Math.floor((right-left)/2)
        if(nums[mid]===target){
            return mid
        }
        if(nums[left]<=nums[mid]){
            if(target>=nums[left] && nums[mid]>=target){
                right=mid
            }else{
                left=mid+1
            }
        }else{
            if(nums[right]>target && nums[mid]<target){
                left=mid+1
            }else{
                right=mid
            }
        }
    }
    return nums[left] === target ? left : -1;
};

console.log(search([4,5,6,7,8,9,1,2,3],2))
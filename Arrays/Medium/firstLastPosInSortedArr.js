/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start=0
    let end=nums.length-1
    let left=0
    let right=0
    while(start<=end){
        let mid = start + Math.floor((end-start)/2)
        if(nums[mid]<target){
            start=mid+1
        }else if(nums[mid]>target){
            end=mid-1
        }else {
            while(nums[mid-left]===target){
                left++
            }
            while(nums[mid+right]===target){
                right++
            }
            return [mid-left+1,mid+right-1]
        }
    }
    return [-1,-1]
};

console.log(searchRange([1],1))
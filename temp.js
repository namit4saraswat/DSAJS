/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l=0
    let r=nums.length-1
    let mid=Math.floor((r+l)/2)
    while(l<r){
        let mid=Math.floor((r+l)/2)
        if(nums[mid]<nums[r]){
            right = mid
        }else{
            left = mid+1
        }
    }
    return nums[l];
};

console.log(findMin([3,4,5,1,2]))
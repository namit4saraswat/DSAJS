/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    let lo=0
    let hi=nums.length-1
    if(nums[lo]>target){
        return 0
    }
    if(nums[hi]<target){
        return hi +1
    }
    
    while(lo<hi){
        let  mid= Math.floor((lo+hi)/2) 
        if(nums[mid]<target){
            lo=mid+1
        }else{
            hi=mid-1
        }
        if(nums[mid]===target){
            return mid
        }else if(nums[mid]>target){
            return mid+1
        }else if(nums[mid]<target) {
            return mid-1
        }
        
    }
    
    
};

console.log(searchInsert([1,3,5,6], 3))
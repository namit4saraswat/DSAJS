/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0
    let r=nums.length-1

    
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid]===target){
            return mid
        }
        if(nums[l]<=nums[mid] ){
            if(nums[mid]>=target && target >= nums[l]){
                r=mid-1
            }else{
                l=mid+1
            }
            
        }else{
            if(nums[mid]<=target && target <= nums[r]){
                l=mid+1
            }else{
                r = mid-1
            }
        }
    }

    return -1

};

console.log(search( [4,5,6,7,0,1,2],3))
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0
    let r=nums.length-1

    let mid = l + Math.floor((r-l)/2)

    while(l<=r){
        let mid = l + Math.floor((r-l)/2)
        if(nums[mid]===target){
            return mid
        }
        if(nums[l]<nums[mid] ){
            if(nums[mid]>=target && target >= nums[left]){
                r=mid-1
            }else{
                l=mid+1
            }
            
        }else{
            if(nums[mid]<=target && target <= nums[right]){
                l=mid+1
            }else{
                r = mid-1
            }
        }
    }

};

console.log(search( [6,7,0,1,2,3,4,5],1))
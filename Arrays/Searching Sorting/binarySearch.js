var binarySearch = function(nums, target) {
    let l = 0
    let r = nums.length-1
    while(l<r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid] === target){
            return mid
        }
        if(nums[l]===target){
            return l
        }
        if(nums[r]===target){
            return r
        }
        if(nums[mid]>target){
            r = mid
        }else{
            l = mid
        }
    }

    return -1
}

console.log(binarySearch([0,1,2,3,4,5,6,7,8,9,10], 3))
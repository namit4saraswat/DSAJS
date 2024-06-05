function swap(nums,i,j){
    let temp=nums[i]
    nums[i]=nums[j]
    nums[j] = temp
    return nums
}

function moveAllNegative(nums){
    let left = 0
    let i=0
    let right=nums.length-1
    while(left<right){
        if(nums[left]<0 && nums[right]<0){
            left++
        }
        if(nums[left]>0 && nums[right]<0){
            swap(nums,left,right)
            left++
            right--
        }
        if(nums[left]>0 && nums[right]>0){
            right--
        } 
        if(nums[left]<0 && nums[right]>0){
            left++
            right--
        }
    }

    return nums
}

console.log(moveAllNegative([ -1, 2, -3, 4, 5, 6, -7, 8, 9]))
var bubbleSort = function(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<nums.length-i;j++){
            if(nums[j-1]>nums[j]){
                let temp=nums[j-1]
                nums[j-1]=nums[j]
                nums[j]=temp
            }
        }
    }

    return nums
}

console.log(bubbleSort([2,5,1,14,9,55,0,12]))
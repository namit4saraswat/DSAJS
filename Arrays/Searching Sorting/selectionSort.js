var selectionSort = function(nums){ 
    for(let i=0;i<nums.length;i++){
        let minIdx = 0
        let min = Number.MAX_VALUE
        for(let  j=i;j<nums.length;j++){
            if(nums[j]<min){
                minIdx = j
                min = nums[minIdx]
            }
        }
        let temp = nums[i]
        nums[i] = nums[minIdx]
        nums[minIdx] = temp
    }
    return nums
    
}

console.log(selectionSort([4,2,5,213,2,25,1,11,6]))
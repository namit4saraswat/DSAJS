function moveAZeroes(nums){
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            nums[j]=nums[i]
            j++
        }
        
    }

    while(j<nums.length){
        nums[j]=0
        j++
    }

    console.log(nums)
}

moveAZeroes([0,1,0,3,12])
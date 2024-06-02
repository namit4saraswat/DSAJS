function weightedChoco1(nums,d){
    let max=0
    let maxIdx=0
    while(d>0){
        for(let i=0;i<nums.length;i++){
            if(nums[i]>max){
                maxIdx=i
                max=nums[i]
            }
        }
        nums[maxIdx]=Math.ceil(nums[maxIdx]/2)
        max=0
        d--
    }
    return nums
}

function weightedChoco(nums,d){
    nums = nums.sort(function(a,b){return a-b})
    let n=nums.length
    let i=n-1
    while(d>0 && i>=0){
        if(i===0 || Math.ceil(nums[i]/2)<nums[i-1]){
            nums[i]=Math.ceil(nums[i]/2)
            if(i===0){
                i=n
            }
            i--
            d--
        }
    }

    console.log(nums)
    
}

console.log(weightedChoco1([40,20,50,30],5))
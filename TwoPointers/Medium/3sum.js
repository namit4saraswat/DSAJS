var threeSum = function (nums){
    let ans = []
    nums = nums.sort(function(a,b){return a-b})
    for(let i=0;i<nums.length-2;i++){
        let lo = i+1
        let hi = nums.length-1
        if((nums[i] === nums[i-1]) && i>0){
            continue
        }
        while(lo<hi){
            let current = nums[lo] + nums[hi] + nums[i] 
            if(current === 0){
                ans.push([nums[i],nums[lo],nums[hi]])
                lo++
                hi--
                while(lo<hi && nums[lo-1]===nums[lo] && nums[hi+1]=== nums[hi]){
                    lo++
                    hi--
                }
                }else if(0>current){
                lo++
                }else{
                    hi--
                }
                
        }
    }
    
    return ans
}

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
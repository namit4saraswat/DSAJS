/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let ans = Number.POSITIVE_INFINITY
    let ans2 = 0
    nums = nums.sort(function(a,b){return a-b})
    for(let i=0;i<nums.length-2;i++){
        let lo = i+1
        let hi = nums.length-1
        if((nums[i] === nums[i-1]) && i>0){
            continue
        }
        while(lo<hi){
            let current = nums[lo] + nums[hi] + nums[i] 
            if(Math.abs(current-target)<ans){
                ans = Math.abs(current-target)
                ans2 = current
                while(lo<hi && nums[lo-1]===nums[lo] && nums[hi+1]=== nums[hi]){
                    lo++
                    hi--
                }
                }
                if(current-target>0){
                    hi--
                }else{
                    lo++
                }
        }
    }

    return ans2
};

console.log(threeSumClosest([0,0,0],1))
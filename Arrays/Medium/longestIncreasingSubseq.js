/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let max=nums[0]
    let ans=1
    let maxAns=1
    for(let i=1;i<nums.length;i++){
        if(max<nums[i]){
            ans++
            if(maxAns<ans){
                maxAns=ans
            }
            max=nums[i]
        }else{
            max=nums[i]
            ans=1
        }
    }

    return maxAns
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
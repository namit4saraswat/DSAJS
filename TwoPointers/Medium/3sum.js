/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    for(let i = 0; i < nums.length; i++) {
        let low = i+1, high = nums.length-1, sum = 0;

        while(low<high){
            sum = nums[low] + nums[high] + nums[i];

            if(sum===0){
                result.push([nums[i], nums[low], nums[high]]);
                
            }

        }
    }

    return number;
    
};

console.log(threeSum([-1,0,1,2,-1,-4]));

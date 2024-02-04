/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // const res= Array.from(new Set(nums))
    // nums.unshift(...res);
    // console.log(nums)
    let i=1;
    let j = 1;
    while(i<nums.length){
        if(nums[i] != nums[i-1]){
            nums[j] = nums[i];
            j++;
        }
        i++;
    }
    console.log(nums)
    return j;
    
};

console.log("returned array is " + removeDuplicates([1,1,2,4,5,5,6,7]));
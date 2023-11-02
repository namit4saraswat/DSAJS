/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//nums = [1,12,-5,-6,50,3], k = 4
var findMaxAverage = function(nums, k) {
    let wStart=0;
    let wEnd = 0
    let wSum = 0;

    while(wEnd < k){
        wSum = nums[wEnd] + wSum;
        wEnd++;
    }

    let max = wSum;

    while(wEnd < nums.length){

        //if condition can be applied here if wEnd -wStart = 4 then only do the sum
        // this was while loop at line 12 can be removed
        wSum = wSum - nums[wStart] + nums[wEnd];
        wStart++;
        wEnd++;
        if(max < wSum){
            max = wSum; 
        }
    }

    return max/k;

};

console.log(findMaxAverage([5], 1))
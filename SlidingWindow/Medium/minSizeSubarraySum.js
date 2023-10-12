/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//target = 8, nums = [2,3,1,2,4,3]
//ans : 2
var minSubArrayLen = function(target, nums) {
	let minLength = nums.length+1;
	let windowSum = 0;
	let wStart = 0;
	let wEnd = 0;

	while(wEnd < nums.length && windowSum <=target){
        windowSum = nums[wEnd] + windowSum;
        while (wStart <= wEnd && windowSum >= target){
            minLength = Math.min(minLength, wEnd - wStart + 1);
            windowSum = windowSum - nums[wStart];
            wStart++;
        }
        wEnd++;
    }
    if(minLength === nums.length + 1){
        return 0;
    }
    return minLength;
};

console.log(minSubArrayLen(5, [1,1,1,1,1,3,2]));

//Try to get k maximum numbers using this method
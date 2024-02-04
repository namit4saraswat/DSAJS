/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    //*****************Approach 1 86.2%, 87.94%*****************/
    nums.sort((a,b)=>a-b)
    return nums

}
console.log("ans is " + majorityElement([1,2,4,5,6,2]))
   
    // **************** Approach 2: 96.77%, 46.92% *****************//
    // let vals = new Map([

    // ]);
    // let i=0;
    // let max =0;
    // let ans=0;
    // while(i<nums.length){
    //     if(vals.has(nums[i])){
    //         vals.set(nums[i], vals.get(nums[i])+1);
    //     }else{
    //         vals.set(nums[i], 1);
    //     }
    //     if(vals.get(nums[i])>max){
    //         max = vals.get(nums[i]);
    //         ans = nums[i];
    //     }
    //     i++;
    // }

    // return ans;


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    let arr = []
    nums = nums.sort(function(a,b){return a-b})
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[k])){
            map.set(nums[i], map.get(nums[i]))
            arr.push(nums[i])
        }else{
            map.set(nums[i],1)  
        }
    }
    return arr[k]
};

console.log(topKFrequent([1,1,1,2,2,3],2))
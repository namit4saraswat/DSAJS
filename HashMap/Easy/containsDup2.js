/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//nums = [1,2,3,1], k = 3
//[1,0,1,1], k = 1
var containsNearbyDuplicate = function(nums, k) {

    let removeFirstElement = function(set) {
        const firstValue = set.values().next().value;
        set.delete(firstValue);
        return set;
      }

    const set = new Set();
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
        if(set.size > k){
          removeFirstElement(set);
        }
    }  
    return false;
};


console.log(containsNearbyDuplicate([1,2,3,1,2,3],2));
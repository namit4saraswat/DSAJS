/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let ans = []
    // let map1 = new Map()
    nums = nums.sort(function (a, b) { return a - b })
    for (let i = 0; i < nums.length - 3; i++) {
        if((nums[i] === nums[i-1]) && i>0){
            continue
        }
        for (let j = i + 1; j < nums.length - 2; j++) {
            if ((nums[j] === nums[j - 1]) && j > 1 && j!=i+1) {
                continue
            }
            // map1.set(nums[i] +' ' + nums[j],1)
            let lo = j + 1
            let hi = nums.length - 1
            while (lo < hi) {
                let current = nums[lo] + nums[hi] + nums[j] + nums[i]
                if (current === target) {
                    ans.push([nums[i], nums[j], nums[lo], nums[hi]])
                    lo++
                    hi--
                    while (lo < hi && nums[lo - 1] === nums[lo] && nums[hi + 1] === nums[hi]) {
                        lo++
                        hi--
                    }
                } else if (target > current) {
                    lo++
                } else {
                    hi--
                }

            }
        }
    }

    return ans
};

console.log(fourSum([0,4,-5,2,-2,4,2,-1,4],12))
// [-5,-2,-1,0,2,2,4,4]
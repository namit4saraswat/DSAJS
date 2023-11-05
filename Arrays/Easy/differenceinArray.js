/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
var findDifference = function(nums1, nums2) {
    nums1 = new Set(nums1)
    nums2 = new Set(nums2)

    for (let item of nums1){
        if (nums2.has(item)) {
            nums1.delete(item)
            nums2.delete(item)
        }
    }
    return [Array.from(nums1),Array.from(nums2)]
};

console.log(findDifference([-3,6,-5,4,5,5],
    [6,6,-3,-3,3,5]))
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = new Map(); // map for next greater element
    const stack = [];
    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) { // Pop elements from stack and update map with next greater element
            map.set(stack.pop(), num);
        }
        stack.push(num); // Push current element onto stack
    }
    for (let i = 0; i < nums1.length; i++) { // Check if each element in nums1 has a next greater element in map
        nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1; // Update element in nums1 with next greater element or -1
    }
    return nums1;
};

console.log(nextGreaterElement([4,1,2],[2,1,4,3]))
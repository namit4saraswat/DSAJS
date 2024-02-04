/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 => [1,2,2,3,5,6]
var merge = function (nums1, m, nums2, n) {
    let i = 1;
    let j = 1;
    let count = 1;
    if (nums1.length === 0) {
        return nums1 = nums2;
    }
    
    while(i<=m && j<=n){
        if(nums1[m-i]<nums2[n-j]){
            nums1[m+n-count] = nums2[n-j]
            j++
        }else{
            nums1[m+n-count] = nums1[m-i]
            i++
        }
        count++;
    }

    while(j<=n){
        nums1[m+n-count] = nums2[n-j] 
        j++
        count++
    }

    return nums1;
};

console.log("ans is " + merge([7,8,9,0,0,0], 3, [2,5,6], 3));
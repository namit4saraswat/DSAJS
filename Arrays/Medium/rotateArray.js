/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//nums = [1,2,3,4,5,6,7], k = 3
var rotate = function(nums, k) {
    const n = nums.length;
    k = k%n;
    let reverse = function(i,j){
        while(i<j){
          temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;  
          i++;
          j--;
        }
    }
    reverse(0,n-k-1);
    reverse(n-k,n-1);
    reverse(0,n-1);

    

    console.log(nums)
};

rotate([1,2], 3)

const n = nums.length;
    let temp = new Array(n);
    for(let i=0;i<k;i++){
        temp[i] = nums[n-k+i];
    }
    for(let i=k;i<n;i++){
        temp[i] = nums[i-k];
    }
     for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
    console.log('nums is ' + nums)
    return nums;
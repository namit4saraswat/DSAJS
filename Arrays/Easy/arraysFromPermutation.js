

// for(i=0;i<nums.length;i++){
//     output[i] = input[input[i]]
// }

//2 1 1 4 5


var buildArray = function(nums) {
    const n = nums.length;
    for(i=0;i<nums.length;i++){
        nums[i]=nums[i]+(n*(nums[nums[i]]%n));
    }

    for(i=0;i<nums.length;i++){
        nums[i] = Math.floor(nums[i]/n);
    }
    

    return nums;
};

console.log('Output array is ' + buildArray([0,2,1,5,3,4]));
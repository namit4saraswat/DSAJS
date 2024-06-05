/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let visited = Array(nums.length).fill(false)
    for(let i=0;i<nums.length;i++){
        if(visited[nums[i]]){
            return nums[i]
        }
        visited[nums[i]]=true
    }
};

console.log(findDuplicate([3,3,3,3,3]))
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let visited = new Array(nums.length).fill(false)
    for(let i=0;i<nums.length;i++){
        if(visited[nums[i]]){
            return nums[i]
        }
        visited[nums[i]]=true
    }
};

console.log(findDuplicate([1,3,4,2,2]))
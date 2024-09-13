/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = []
    let arr = []
    let l = nums.length
    function permute(nums,ans,arr){
        if(arr.length === l){
            ans.push([...arr])
            return
        }
        for(let i=0;i<nums.length;i++){
            arr.push(nums[i])
            permute(nums.slice(0,i).concat(nums.slice(i+1)), ans,arr)
            arr.pop()

        }
        
    }
    permute(nums,ans,arr,0)

    return ans
    
};


console.log(permute([1,2,3]))
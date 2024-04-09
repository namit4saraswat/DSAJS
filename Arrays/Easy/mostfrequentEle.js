var mostFreqEle = function(nums){
    let map= new Map()
    let ans=0
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
            ans = Math.max(ans, map.get(nums[i]))
        }else{
            map.set(nums[i],1)
        }
    }

    return ans
}

console.log(mostFreqEle([2,12,1,2,4,3,0,0,0,0,0,0,0,0,0,0,2,2,1,1,2,1,1,1,1]))
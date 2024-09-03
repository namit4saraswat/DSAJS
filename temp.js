function contiguousArray(nums){
    let map = new Map()
    let s=0
    map.set(s,-1)
    let ans = 0
    for(let i=0;i<nums.length;i++){
        s = nums[i] === 1 ? s -1 : s + 1
        if(map.get(s) != undefined){
            ans = Math.max(ans,i-map.get(s))
        }else{
            map.set(s,i)
        }
        
    }
    return ans
}

console.log(contiguousArray([1,0,0]))
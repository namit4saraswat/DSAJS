function reverse(nums){
    if(nums.length===0){
        return
    }

    let tmp=nums.shift()
    reverse(nums)
    nums.push(tmp)
    return nums
}

console.log(reverse([1,2,3,4,5]))
function deleteMiddle(nums, l,pos){
    if(l-1===pos){
        return nums.pop()
    }

    let top=nums.pop()
    deleteMiddle(nums, l-1,pos)
    nums.push(top)
    return nums
}

console.log(deleteMiddle([1,2,3,4,5,6],6,3))
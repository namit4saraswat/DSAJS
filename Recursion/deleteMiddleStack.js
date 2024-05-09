function deleteMiddle(nums, l,pos){
    // if(l-1===pos){
    //     return nums.pop()
    // }

    // let top=nums.pop()
    // deleteMiddle(nums, l-1,pos)
    // nums.push(top)
    // return nums
}

function deleteMiddle1(nums,k){
   if(k===0){
    nums.pop()
    return
   }
   let tmp = nums.pop()
   deleteMiddle1(nums,k-1)
   nums.push(tmp)
   return nums
}



console.log(deleteMiddle1([1,2,3,4,5,6],3))
var partition = function(nums,l,h){
    console.log(l)
    let pivot = nums[l]
    let i = l
    let j = h
    while(i<j){
        do{
            i++
        }while(nums[i]<=pivot)

        do{
            j--
        }while(nums[j]>=pivot)

        if(i<j){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }

        
    }

    let temp = nums[l]
    nums[l] = nums[j]
    nums[j] = temp
    return j
}

var quickSort = function(nums,l,h){
    let j = partition(nums, l, h)
    quickSort(l,j)
    quickSort(j+1,h)

}

let nums= [10,16,8,12,15,6,3,9,5]
let l=0
let h= nums.length
nums[h] = Infinity
quickSort(nums,l,h)
console.log(nums)
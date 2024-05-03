//sum of array element
function sum(n){
    if(n===0){
        return 0
    }
    
    return n+ sum(n-1)
}

//reverse the array
function reverse(nums,ans){
    if(nums.length===0){
        console.log(ans)
        return
    }

    ans.push(nums.pop())
    reverse(nums,ans)
}

//all sub sequence
function subsequence(nums,n,ans){
    if(n===0){
        return 
    }
    ans.push(nums[n-1])
    console.log(ans)
    subsequence(nums,n-1,ans)
    ans.pop()
    subsequence(nums,n-1,ans)
}

//all subsequence having sum 2
function subSeqSum(nums, n,ans,tSum){
    if(tSum===0){
        console.log(ans)
    }
    if(tSum<0 || n===0){
        return 
    }
    
    ans.push(nums[n-1])
    
    subSeqSum(nums,n-1,ans,tSum-nums[n-1])
    ans.pop()
    subSeqSum(nums,n-1,ans,tSum)
    
}

//number of subsequence having sum k
function numberSubSeqSum(nums, i,tSum){
    if(i===nums.length){
        if(tSum===0){
            return 1
        }
        else{
            return 0
        } 
    }
    
    let l= numberSubSeqSum(nums,i+1,tSum-nums[i])
    let r = numberSubSeqSum(nums,i+1,tSum)
    return l+r
    
}
console.log(numberSubSeqSum([1,2,3],0,3))
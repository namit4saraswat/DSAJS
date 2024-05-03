let l,r
function printSubsetsCountUtil(arr,n,sum){
    if(sum===0){
        return 1
    }
    if( n===0){
        return 0
    }
    

    if(sum[n-1]>sum){
        l=  printSubsetsCountUtil(arr, n - 1, sum)
    }else{
        r =  printSubsetsCountUtil(arr,n-1,sum-arr[n-1])  || printSubsetsCountUtil(arr,n-1,sum)   
    }

    return l+r
}


function printSubsetsCount(nums, X){
    console.log(printSubsetsCountUtil(nums,X,nums.length))
}

printSubsetsCount([1,2,3,3],6)
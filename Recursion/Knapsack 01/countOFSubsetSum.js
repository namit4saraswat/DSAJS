
function printSubsetsCountUtil(arr,n,sum){
    if(sum===0){
        return 1
    }
    if( n===0){
        return 0
    }
    
    if(sum[n-1]>sum){
        return  
    }else{
        return printSubsetsCountUtil(arr,n-1,sum-arr[n-1])  + printSubsetsCountUtil(arr,n-1,sum)   
    }
    
}


function printSubsetsCount(nums, X){
    console.log(printSubsetsCountUtil(nums,nums.length,X))
}

printSubsetsCount([2,3,4,5],9)
function maxSumSubarray(arr){
    let sum=0
    let ans=arr[0]
    for(let i=0;i<N;i++){
        sum=sum + arr[i]
        ans = Math.max(ans,sum)
        if(sum<0){
            sum=0
        }
    }

    return ans
}

console.log(maxSumSubarray([-1,-2,-3,-4]))
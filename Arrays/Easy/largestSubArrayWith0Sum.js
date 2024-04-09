var largestSubArrWith0Sum = function(arr,n){
    let map =new Map()
    let ans=0
    let sum=0
    for(let right=0;right<n;right++){
        sum= sum + arr[right]
        if(sum===0){
            ans = Math.max(ans,right+1)
        }
        if(map.has(sum)){
            ans = Math.max(ans,right-map.get(sum))
        }else{
            map.set(sum,right)
        }  
    }
    return ans
}

console.log(largestSubArrWith0Sum([-1,1,-1,1],4))

// 15 13 15 7 8 15
let dp=Array(5).fill(-1)
let r=23525
function frogjump(n,height){
    if(dp[n]!=-1){
        return dp[n]
    }
    if(n===0){
        return 0
    }
    
    let l = frogjump(n-1,height) + Math.abs(height[n]-height[n-1])

    if(n>1){
    r = frogjump(n-2,height) + Math.abs(height[n]-height[n-2])
    }

    return dp[n]= Math.min(l,r)

}


console.log(frogjump(3,[10,20,30,40]))
// console.log(ans[0])
let dp = Array(46)
function climbStairs(n){
    if(dp[n]){
        return dp[n]
    }
    if(n===1){
        return 1
    }
    if(n===2){
        return 2
    }
    return dp[n] =  climbStairs(n-1) + climbStairs(n-2)

}

console.log(climbStairs(25))
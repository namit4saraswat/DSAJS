let dp = Array(46).fill(-1)
var climbStairs = function(n){
    if(dp[n]!=-1){
        return dp[n]
    }
    if(n===0){
        return 0
    }
    
    if(n===1){
        return 1
    }
    if(n===2){
        return 2
    }
    dp[n] =   climbStairs(n-1) + climbStairs(n-2)
    return dp[n]
}

console.log(climbStairs(45))
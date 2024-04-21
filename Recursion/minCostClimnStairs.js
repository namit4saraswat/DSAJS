/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairsUtil = function(cost,n,dp) {
    if(dp[n]){
        return dp[n]
    }
    if(n===1 || n===0){
        return  0
    }
    if(n===2){
        return Math.min(cost[0],cost[1])
    }
    
    return dp[n] = Math.min(minCostClimbingStairsUtil(cost,n-1,dp) + cost[n-1],minCostClimbingStairsUtil(cost,n-2,dp) + cost[n-2])
};

function minCostClimbingStairs(cost){
    let dp = Array(1000)
    return minCostClimbingStairsUtil(cost,cost.length,dp)
}

console.log(minCostClimbingStairs([0,0,0,0]))

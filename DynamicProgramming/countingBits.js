
var countBits = function(n) {
    let dp = Array(n+1)
    if(n===0){return [0]}
    if(n===1){return [1]}
    if(n===2){return [1]}
    if(n===3){return [2]}
    dp[0]=0
    dp[1]=1
    dp[2]=1
    dp[3]=2
    let offset=4
    for(i=4;i<=n;i++){
        if(i===offset*2){
            offset=offset*2
        }
        dp[i] = 1+dp[i-offset]
    }

    return dp
}


console.log(countBits(31))
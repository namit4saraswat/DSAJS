var generate = function(numRows) {
    
    
    let dp=  Array.from({length:numRows},()=>[])
    dp[0].push(1)
    for(let i=1;i<numRows;i++){
        dp[i].push(1)
        for(j=1;j<i;j++){
            dp[i].push(dp[i-1][j-1] + dp[i-1][j])
        }
        dp[i].push(1)
    }
    return dp
};

console.log(generate(6))
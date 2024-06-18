var tribonacci = function(n) {
    let dp=  Array.from({length:n})
    dp[0]=0
    dp[1]=1
    dp[2]=1
    dp[3]=2
    let i=4
    while(i<=n){
        dp[i]=(2*dp[i-1]) - dp[i-4]
        i++
    }
    return dp
};

//note: use only 3 variable. and assign them each next value, so that space complexity will be low

console.log(tribonacci(25))
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var kthGrammarUtil = function(n,dp) {
    if(dp[n]!=-1){
        return dp[n]
    }
    if(n===1){
        return '0'
    }
    if(n===2){
        return '01'
    }
    if(n===4){
        return '01101001'
    }
    
    return dp[n]= kthGrammarUtil(n-1,dp) + kthGrammarUtil(n-1,dp).split('').reverse().join('')
    
};

var kthGrammar = function(n, k) {
    let num = Array(n+1).fill(-1)
    let ans = kthGrammarUtil(n,num)
    return ans
};

console.log(kthGrammar(3,1))
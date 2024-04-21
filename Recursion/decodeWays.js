
let map = new Map()


var numDecodings = function(s) {
    
    let n = s.length+1
    let dp = Array(n).fill(0)
    dp[0]=1
    dp[1]= s[0]===0 ? 0 : 1

    for(let i=2;i<=n;i++){
        let oneDigit =  parseInt(s[i-1])
        let twoDigits = parseInt(s[i-2]+ s[i-1])

        if(oneDigit>=1){
            dp[i] =dp[i] + dp[i-1]
        }
        if(twoDigits<=26 && twoDigits>=10){
            dp[i] = dp[i] + dp[i-2]
        }
    }

    return dp[n-1]
};


console.log(numDecodings('05'))
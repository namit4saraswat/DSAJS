/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0){
        return 0
    }
    if(n===1){
        return 1
    }
    return fib(n-1) + fib(n-2)
   
};

//Using tabulation, Bottom up
//This method doesn't use recursion stack, auxilary space, hence less space complexity
var fib2 = function(n){
    let dp = Array(n)
    dp[0]=0
    dp[1]=1
    for(let i=2;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }

    return dp[n]
}

//more less space complexity
var fib3 = function(n){
    let curr
    let dp = Array(n)
    let prev2=0
    let prev=1
    for(let i=2;i<=n;i++){
        curr = prev + prev2
        prev2=prev
        prev=curr
    }

    return curr
}

console.log(fib(6))
console.log(fib2(6))
console.log(fib3(6))
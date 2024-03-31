/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegativ ;
    if(x<0){
        isNegativ = true
        x=Math.abs(x)
    }
    let ans=''
    x=x+''
    for(let i=0;i<x.length;i++){
        ans =   x[i] + ans
    }
    ans = parseInt(ans)
    if(isNegativ){
        return -1*ans
    }else{
        return ans
    }
};

console.log(reverse(120))
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    let rev=0
    len = x.toString().length;
    let i=0
    while(i<len/2){
        rev = rev * 10 + (x%10)
        x=Math.floor(x/10)
        i++
    }
    if(len%2!=0){
        rev=Math.floor(rev/10)
    }
    if(rev === x){
        return true
    }else{
        return false
    }
    

};

console.log(isPalindrome(121))
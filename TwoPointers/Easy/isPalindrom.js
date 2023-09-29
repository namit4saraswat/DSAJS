
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let i=-1;
    let j=s.length;
    while(i++ < j--){
        if(s.charAt(i)!=s.charAt(j)){
            return false;
        }
    }
    return true 
};

console.log(isPalindrome("HEkSPsqs\"?\"3\"?\"rqrPSkEH"));
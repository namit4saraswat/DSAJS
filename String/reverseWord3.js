/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans = ''
    let word = ''
    for(let i=0;i<s.length;i++){
        if(s[i]!= ' '){
            word = s[i]+ word 
        }else{
            ans = ans + ' ' + word
            word=''
        }
    }
    ans = ans + ' ' + word

    return ans.trim()
};

console.log(reverseWords(""))
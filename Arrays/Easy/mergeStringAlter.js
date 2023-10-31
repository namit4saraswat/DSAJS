/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    let ans = '';
    for(let i=0;i<Math.max(m,n);i++){
        if(i<m){
            ans = ans + word1.charAt(i)
        }
        if(i<n){
            ans = ans + word2.charAt(i);
        }
         
    }
    return ans;
};

console.log(mergeAlternately('abcde', 'pqr'))
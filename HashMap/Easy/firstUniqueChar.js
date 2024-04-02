/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let alpha = new Array(27).fill(0)

    for(let i=0;i<s.length;i++){
        alpha[s[i].charCodeAt(0)-97]++
    }

    for(let i=0;i<s.length;i++){
        if(alpha[s[i].charCodeAt(0)-97]===1){
            return s[i]
        }
    }
    return -1
};

console.log(firstUniqChar('sdfbzxhjb'))
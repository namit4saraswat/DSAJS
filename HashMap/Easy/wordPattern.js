/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
//pattern = "aaaa", s = "dog cat cat dog"
var wordPattern = function(pattern, s) {
    if((s === pattern && pattern.length > 1) || s.length ===0){
        return false;
    }
    arr = s.split(" ");
    if(pattern.length > arr.length){
        return false;
    }
    let k = 0;
    for (let i = 0; i < pattern.length; i++) {
        if (pattern.indexOf(pattern[i], i + 1) != arr.indexOf(arr[i], i + 1)) {
            return false;
        }
    }
    return true;
};

console.log(wordPattern("he", "unit"));
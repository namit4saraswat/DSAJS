/**
 * @param {string} s
 * @return {number}
 */
//s = "abcpqcbcbb" => 3
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let set = new Set();
    let highest = 0;

    for(let i = 0; i < s.length; i++){

        while(set.has(s[i])){
            set.delete(s[left]);
            left++;
        }
        set.add(s[i]);
        highest = Math.max(highest, (i - left) + 1)
    }

    return highest
};

console.log(lengthOfLongestSubstring('abccprw'))
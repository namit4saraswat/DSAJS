/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let count=0
    let ans=0
    let start=0
    for(let i=0;i<s.length;i++){
        if(map.get(s[i])>=start){
            start=map.get(s[i])+1
        }
        ans= Math.max(ans,i-start+1)
        map.set(s[i],i)
       
        
        ans = Math.max(ans,count)
    }

    return ans
};

console.log(lengthOfLongestSubstring('abcabdbb'))
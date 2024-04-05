/**
 * @param {string} s
 * @return {number}
 */
//s = "abcpqcbcbb" => 3
var lengthOfLongestSubstring = function(s,k) {
    let ans = []
    let map = new Map()
    let j = 0
    while(j<k){
        if(map.has(s[j])){
            map.set(s[j],map.get(s[j])+1)
        }else{
            map.set(s[j],1)
        }
        j++
    }
    ans.push(map.size)
    for(j=k;j<s.length;j++){
        if(map.get(s[j-k])===1){
            map.delete(s[j-k])
        }else{
            map.set(s[j-k],map.get(s[j-k])-1)
        }
        if(map.has(s[j])){
            map.set(s[j],map.get(s[j])+1)
        }else{
            map.set(s[j],1)
        }
        ans.push(map.size)
    }
    return ans
};

console.log(lengthOfLongestSubstring([ 1, 2, 4, 4],2))
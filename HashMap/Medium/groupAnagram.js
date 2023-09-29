/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//strs = ["eat","tea","tan","ate","nat","bat"]
//[["bat"],["nat","tan"],["ate","eat","tea"]]

// var isAnagram = function (s, t) {
//     var freq = new Array(26).fill(0);
//     if(s.length < t.length){
//         return false;
//     }
//     for (var i = 0; i < s.length; i++) {
//         freq[s.charCodeAt(i) - 97]++;
//         freq[t.charCodeAt(i) - 97]--;
//     }
//     for (let i = 0; i < freq.length; i++) {
//         if (freq[i] != 0) {
//             return false;
//         }
//     }
//     return true;
// }

// var groupAnagrams = function (strs) {
//     let ans = [];
//     for (let j = 0; strs.length != 0; j++) {
//         ans[j] = [];
//         ans[j][0]= strs[0];
//         for (let i = 1; i < strs.length; i++) {
//             if (isAnagram(strs[0], strs[i])) {
//                 ans[j][i] = strs[i];
//                 strs.splice(i, 1);
//                 i--;
//             }
//         }
//         strs.splice(strs[0], 1);  
//     }

//     return ans;
// };

// console.log(groupAnagrams(["b", ""]));



var groupAnagrams = function (strs) {
    let map = {};
    for (let str of strs){
       let s = str.split('').sort().join('')
       if(!map[s]) map[s] = [];
       map[s].push(str);
    }
    
    return Object.values(map);
}   

console.log(groupAnagrams(["b", ""]));
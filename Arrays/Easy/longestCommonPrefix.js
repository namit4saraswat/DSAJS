/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const n = strs.length;
    let i=0;
    while(i<n-1){
        let strs1 = strs[i].replace(strs[i+1],'');
        if(strs1.length == strs[i].length){
            return "";
        }else{
            i++;
        }
    }
};
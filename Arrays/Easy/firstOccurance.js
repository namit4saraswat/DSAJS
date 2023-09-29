/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * haystack = "sadbutsad", needle = "sad"
 */
var strStr = function(haystack, needle) {
    if(needle ===  haystack){
        return 0;
    }
    let i=0;
    let ans = "";
    for(i=0; i<=haystack.length-needle.length;i++){
        if(haystack.charAt(i) === needle.charAt(0)){
            ans = haystack.substring(i,i+needle.length);
        }

        if(ans === needle){
            return i;
        }

        
    }
    return -1;
    
};




console.log(strStr("mississipi", "issipi" ));

// if(needle.length > haystack.length){
//     return -1;
// }
// if(needle ===  haystack){
//     return 0;
// }
// const n= haystack.length;
// let i=0;
// while(i<=n-needle.length){
//     console.log(haystack.substring(i,i+needle.length));
//     if(needle === haystack.substring(i,i+needle.length)){
//         return i;
//     }
//     i++;
// }
// if(i==n-needle.length+1){
//     return -1;
// }
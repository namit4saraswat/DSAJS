/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const n = s.length;
    let i=n-1;
    while(i>=0){
        if(s.charAt(i)== " "){
            i--;
        }else{
            break;
        }
        }
    let space1 = i;    
    while(i>=0){
        if(s.charAt(i)!= " "){
            i--;
        }else{
            break;
        }
    }
    return space1-i;
};

console.log(lengthOfLastWord("a"));
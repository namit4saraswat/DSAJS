/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stk=[]
    let ans =''
    for(let i=0;i<s.length;i++){
        stk.push(s[i])
            if(stk[stk.length-1]===stk[stk.length-2]){
                stk.pop()
                stk.pop()
            }
        }
    
    while(stk.length > 0){
        ans =  stk.pop() + ans
    }

    return ans
};




console.log(removeDuplicates("abbaca"))
/**
 * @param {string} s
 * @return {boolean}
 */

//s = "()[]{}"
var isValid = function(s) {
    const n = s.length;
    if(n<=1){
        return false;
    }
    let stk = [];

    for(let i=0;i<n;i++){
        if(s[i] === '['){
            stk.push(']')
            continue;
        }
        if(s[i] === '{'){
            stk.push('}')
            continue;
        }
        if(s[i] === '('){
            stk.push(')')
            continue;
        }

        if(stk.pop() != s[i]){
            return false;
        }
    }

    return (!stk.length)

};

console.log(isValid("()"));
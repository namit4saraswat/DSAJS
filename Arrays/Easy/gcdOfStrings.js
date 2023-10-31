/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let divisor = str1.length < str2.length ? str1 : str2;
    let divident = divisor === str1 ? str2 : str1;
    let i=0;
    const n = divisor.length;
    while(i<n){
    if((divident.replaceAll(divisor.substring(i,n), '')).length === 0 && 
    (divisor.replaceAll(divisor.substring(i,n), '')).length === 0){
        return divisor.substring(i,n);
    }
    i++;
    }

    return ""
};

// let x = (divident.replaceAll(divisor.substring(i,n), '')).length;
    // let y =(divisor.replaceAll(divisor.substring(i,n), '')).length;
    // if(x === 0 & y === 0){
    //     return divisor.substring(i,n);
    // }
console.log(gcdOfStrings('LEET', 'CODE'))
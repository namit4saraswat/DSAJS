/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    return n > 0 && Math.log2(n) % 2 === 0;
    
};

var isPowerOfTwo = function(n) {
    return n > 0 && (Math.log2(n) % 2 === 0 ||  Math.log2(n) % 2 === 1);
    
};

var isPowerOfThree = function(n) {
    let num = (Math.log(n)/Math.log(3)).toFixed(9);
    return n > 0 && (num % 2 === 0 ||  num % 2 === 1);
    
};

console.log(isPowerOfThree(531440))
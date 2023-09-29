/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let returnSquare= function(num){
        let square = 0;
        while(num/10>0){
            square = square + Math.pow(num%10, 2);
            num = parseInt(num/10);
        }
        return square;
    }
    let set1 = new Map();
    while(n != 1){
        n = returnSquare(n);
        if(set1.has(n)){
            return false;
        }
        set1.set(n);
    }

    return true;
};

console.log(isHappy(19));
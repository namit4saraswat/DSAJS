/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let num =  [ ...Array(n).keys() ].map( i => i+1);
    var findTheWinner = function(start,k){
        if(num.length===1){
            return num
        }
        start = (start+k-1)%num.length;
        num.splice(start, 1)
        return findTheWinner(start,k)
    }
    return findTheWinner(0,k)
};

console.log(findTheWinner(6,5))
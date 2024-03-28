/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {

    let trustArray = new Array(n).fill(0)
    for(let i=0;i<trust.length;i++){
        trustArray[trust[i][0]-1]--
        trustArray[trust[i][1]-1]++
    }
    
    for(let i=0;i<trustArray.length;i++){
        if (trustArray[i] === n-1){
            return i+1
        }
    }

    return -1

};

console.log(findJudge(3,[[1,3],[2,3]]))
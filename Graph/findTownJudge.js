/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trustArr = new Array(n+1).fill(0)

    for(let i=0;i<trust.length;i++){
        trustArr[trust[i][0]]--
        trustArr[trust[i][1]]++
    }

    for(let num of trustArr){
        if(num===n-1){
            return true
        }
    }

    return false

};

console.log(findJudge(3,[[1,3],[2,3]]))
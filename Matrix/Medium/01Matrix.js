/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let result=Array.from({ length :mat[0].length},()=>Array(mat.length).fill(-1))
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            if(mat[i][j]===0){
                result[i][j] =0
            }
        }
    }
    return result
};

console.log(updateMatrix([[0,0,0],[0,1,0],[0,0,0]]))
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var printMatrix = function(matrix){
    const n= matrix[0].length;
    let ans="";
    for(let j=0;j<n;j++){
        for(let i=0;i<n;i++){
           ans = ans + " " + matrix[j][i];
        }
        ans = ans + "\n"
    }
    console.log(ans);
}

var rotate = function(matrix) {
    const n= matrix[0].length;
    for(let j=0;j<n;j++){
        for(let i=j;i<=j;i++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n-j-1][i];
            matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
            matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
            matrix[j][n-i-1] = temp;
            printMatrix(matrix);
        }
    }
};

rotate( [[1,2,3],[4,5,6],[7,8,9]]);
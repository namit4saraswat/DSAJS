/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let number = [];
    const n = matrix[0].length;
    const m = matrix.length;
    let count=0;
    for(let i=0;i<m;i++){
        for(let j=i;j<n-i;j++){
            number.push(matrix[i][j]);
        }
        count++;
        if(count>= (Math.min(m,n))*2){
            break;
        }
        for(let j=i+1;j<m-i;j++){
            number.push(matrix[j][n-i-1]);
        }
        count++;
        if(count>= (Math.min(m,n))*2){
            break;
        }
        for(let j=n-i-2;j>=i;j--){
            number.push(matrix[m-i-1][j]);
        }
        count++;
        if(count>= (Math.min(m,n))*2){
            break;
        }
        for(let j=i+1;j<m-i-1;j++){
            number.push(matrix[m-j-1][i])
        }
        count++;
        if(count>= (Math.min(m,n))*2){
            break;
        }
    }

    return number;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
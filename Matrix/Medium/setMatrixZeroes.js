/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var printMatrix = function(matrix){
    const n= matrix.length;
    const m= matrix[0].length;
    let ans="";
    for(let j=0;j<n;j++){
        for(let i=0;i<m;i++){
           ans = ans + " " + matrix[j][i];
        }
        ans = ans + "\n"
    }
    console.log(ans);
}

var setZeroes = function(matrix) {
    let update = function(matrix,i,j){
        for(let k=0;k<matrix[i].length;k++){
            if(matrix[i][k] === 0){
                continue;
            }else{
                matrix[i][k] =  'a';
            }
        }
        for(let k=0;k<matrix.length;k++){
            if(matrix[k][j] === 0){
                continue;
            }else{
                matrix[k][j] =  'a';
            }
        }
    }
    
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j] === 0){
               update(matrix,i,j)
            }
        }
    }

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j] === 'a'){
                matrix[i][j] = 0;
            }
        }
    }

    printMatrix(matrix);
};


setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
var sumTriangular = function(mat, N){
    let uSum=0
    let lSum=0
    for(let i=0;i<=N-1;i++){
        for(let j=i;j<=N-1;j++){
            uSum = uSum + mat[i][j]
            lSum = lSum + mat[N-i-1][N-1-j]
        }
    }

    return ([uSum, lSum])
}

console.log(sumTriangular([[6,5,4],[1,2,5],[7,9,7]],3))
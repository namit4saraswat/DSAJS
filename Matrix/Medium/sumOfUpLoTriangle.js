var sumTriangular = function(mat, N){
    let uSum=0
    let lSum=0
    for(let i=0,j=0;i<=N-1;){
        if(i<=j){
            uSum = uSum + mat[i][j]
        }
        if(i>=j){
            lSum = lSum + mat[i][j]
        }
        j++
        if(j===N-1){
            i++
            j=0
        }
    }

    return ([uSum, lSum])
}

console.log(sumTriangular([[6,5,4],[1,2,5],[7,9,7]],3))
var transpose = function(matrix){
    let j=0
    let newMatrix = [...Array(matrix[0].length)].map(_=>Array(matrix.length)) 
    for(let i=0;i<matrix.length;){
        newMatrix[j][i] = matrix[i][j]
        j++
        if(j===matrix[0].length){
            j=0
            i++
        }
    }
    return newMatrix
}

console.log(transpose([[1,2]]))
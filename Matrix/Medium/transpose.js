var transpose = function(matr){
    let j=0
    for(let i=0;i<matr.length;){
        if(i!=j){
            let temp = matr[i][j]
            matr[i][j] = matr[j][i]
            matr[j][i] = temp
        }
        j++
        if(j===matr.length){
            i++
            j=i
        }
    }

    return matr
}

console.log(transpose([[1,1,1,1],
    [2,2,2,2],
    [3,3,3,3],
    [4,4,4,4]
]))
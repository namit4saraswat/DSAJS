/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

function isValid(i, j, n, m, image,col) {
    if (i < n && i >= 0 && j < m && j >= 0 && image[i][j] === col) {
        return true
    }

    return false
}

function floodFillRec(i, j, n, m, image,color,col) {
    if(image[i][j]===col){
        image[i][j] = color
    }

    if (isValid(i + 1, j, n, m, image,col)) {
        floodFillRec(i + 1, j, n, m,image,color,col)
    }
    
    if (isValid(i - 1, j, n, m, image,col)) {
        floodFillRec(i - 1, j, n, m,image,color,col)
    }
    
   
    if (isValid(i, j + 1, n, m, image,col)) {
        floodFillRec(i, j + 1, n, m, image,color,col)
    }
    
    if (isValid(i, j - 1, n, m, image,col)) {
        floodFillRec(i, j - 1, n, m, image,color,col)
    }
    

}

var floodFill = function(image, sr, sc, color) {
    let n = image.length
    let m = image[0].length
    const col = image[sr][sc]
    if(col === color){
        return image
    }
    floodFillRec(sr, sc, n, m, image,color,col)
        
    

    return image
};


console.log(floodFill([[0,0,0],[0,0,0]], 0,0,1))
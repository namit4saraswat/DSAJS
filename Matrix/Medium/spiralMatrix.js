/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = []
    const rows = matrix.length
    const cols = matrix[0].length

    let left = 0
    let right = cols - 1
    let top = 0
    let bottom = rows - 1

    while (result.length < rows* cols){

        for (let col = left; col <=right; col++){
            result.push(matrix[top][col])
        }
        top++

        for (let row = top; row <= bottom; row++){
            result.push(matrix[row][right])
        }
        right--

        for (let col = right; col >= left; col--){
            if (result.length < rows*cols){
                result.push(matrix[bottom][col])
            }
        }
        bottom--

        for (let row = bottom; row >= top; row--){
            if (result.length < rows*cols){
                result.push(matrix[row][left])
            }
        }
        left++
    }
    return result
    
};
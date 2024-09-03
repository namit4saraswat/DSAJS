/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let l=0
    let row=matrix.length
    let col=matrix[0].length
    let r=row * col-1
    while(l<=r){
        let mid = l + Math.floor((r-l)/2)
        let midRow = Math.floor(mid/col)
        let midCol =mid%col
        if(matrix[midRow][midCol]===target){
            return true
        } else if(matrix[midRow][midCol]>target){
            r= mid-1
        }else{
            l=mid+1
        }
    }

    return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))
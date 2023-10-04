/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let number = [];
    const n = matrix[0].length;
    const m = matrix.length;
    let flow = 0;
    let last =0;
    for(let i=0;i<Math.min(m,n) * 4;i++){
        for(let j=0;j<n-Math.floor(((i+1)/4));j++){
            if(i%2===0 && (i%4 ===0 || (i-1) %4 ===0)){
                number.push(matrix[last][j]);
            }else if(i%2!=0 && (i%4 ===0 || (i-1) %4 ===0)){
                if(j===m){
                    break;
                }
                number.push(matrix[j][last])
            }else if(i%2===0 && ((i%4 !=0 && (i-1) %4 !=0))){
                number.push(matrix[last][n-j-1])
                flow = n-j;
            }else if(i%2!=0 && ((i%4 !=0 && (i-1) %4 !=0))){
                if(j===m){
                    break;
                }
                number.push(matrix[m-j-1][n-last-1])
            }
            flow = j;
        }
        last = flow;
    }
};

spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
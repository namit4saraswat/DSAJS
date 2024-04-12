/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let m=image.length
    let n=image[0].length
    let r=[0,1,0,-1]
    let c=[1,0,-1,0]

    var dfs= function(i,j,px){
        if(i<m && j<n && i>=0 && j>=0 && image[i][j]===px && image[i][j]!=color){
            for(let p=0;p<r.length;p++){
                image[i][j]=color
                dfs(i+r[p],j+c[p],px)
                    
                
            }
        }
    }

    dfs(sr,sc,image[sr][sc])
    return image

};


console.log(floodFill([[0,0,0],[0,0,0]],0,0,0))
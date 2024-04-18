/**
 * @param {number[][]} grid
 * @return {number}
 */

function isvalid(i,j,m,n,grid){
    if(i>0 && i<m-1 && j>0 && j<n-1 && grid[i][j]===0){
        return true
    }
    return false
}


function doBfs(i,j,m,n,grid){
    let r=[-1,0,1,0]
    let c=[0,1,0,-1]
    
    for(let l=0;l<r.length;l++){
        if(isvalid(r[l] + i,c[l] + j,m,n,grid)){
            grid[r[l] + i][c[l] + j]=1
            doBfs(r[l] + i,c[l] + j,m,n,grid)
        }
    }
}

var closedIsland = function(grid) {
    let temp=0
    let ans=0
    let m=grid.length
    let n=grid[0].length
    for (let i = 0; i < grid.length; i++) {
        let j = 0
        if (grid[i][j] === 0) {
            doBfs(i,j, m,n,grid)
        }
        if (grid[i][n - 1] === 0) {
            doBfs(i,n-1,m,n , grid)
        }
    }
    for (let i = 0; i < grid[0].length; i++) {
        let j=0
        if (grid[j][i] === 0) {
            doBfs(j,i,m,n, grid)
        }

        if (grid[m - 1][i] === 0) {
            doBfs(m-1,i, m,n, grid)
        }
    }
    for(let i=1;i<m-1;i++){
        for(let j=1;j<n-1;j++){
            if(grid[i][j]===0){
                ans++
                doBfs(i,j,m,n,grid)
                
            }
        }
    }

    return ans
};

console.log(closedIsland([[0,0,1,1,0,1,0,0,1,0],[1,1,0,1,1,0,1,1,1,0],[1,0,1,1,1,0,0,1,1,0],[0,1,1,0,0,0,0,1,0,1],[0,0,0,0,0,0,1,1,1,0],[0,1,0,1,0,1,0,1,1,1],[1,0,1,0,1,1,0,0,0,1],[1,1,1,1,1,1,0,0,0,0],[1,1,1,0,0,1,0,1,0,1],[1,1,1,0,1,1,0,1,1,0]]))
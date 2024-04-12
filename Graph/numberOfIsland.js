    /**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let ans=0
    let m=grid.length
    let n=grid[0].length
    let r = [-1,0,1,0]
    let c = [0,1,0,-1]
    var dfs = function(i,j){
        if(i<m && j<n && i>=0 && j>=0 & grid[i][j]==='1'){
            grid[i][j]='0'
            for(let p=0;p<r.length;p++){
                dfs(i+r[p],j+c[p])
            }
        }
    }

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==='1'){
                ans++
                dfs(i,j)
            }
            
        }
    }

    return ans
};

console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]))
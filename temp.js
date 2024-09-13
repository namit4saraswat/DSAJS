// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
var numIslands = function(grid) {
    let r = [-1,0,1,0]
    let c = [0,1,0,-1]
    let ans=0
    function isValid(i,j){
        if(i>=0 && i<grid.length && j>=0 && j<grid[0].length && grid[i][j]==='1' && grid[i][j]!='2'){
            grid[i][j]='2'
            return true
        }
    }

    function dfs(i ,j){
        if(isValid(i,j)){
            for(let k=0;k<r.length;k++){
                dfs(i+r[k],j+c[k])
            }
            
        }
        
    }
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==='1'){
                ans++
                dfs(i,j)
            }
        }

    }

    return ans
};

console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]))
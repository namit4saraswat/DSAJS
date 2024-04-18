/**
 * @param {character[][]} grid
 * @return {number}
 */

function isValid(i, j, n, m, grid,area) {
    if (i < n && i >= 0 && j < m && j >= 0 && grid[i][j] === 1) {
        return true
    }

    return false
}

function numIslandRec(i, j, n, m, grid,area) {
    grid[i][j] = '0'
    area++
    if (isValid(i + 1, j, n, m, grid,area)) {
        numIslandRec(i + 1, j, n, m, grid,area)
    }
    if (isValid(i - 1, j, n, m, grid,area)) {
        numIslandRec(i - 1, j, n, m, grid,area)
    }
    if (isValid(i, j + 1, n, m, grid,area)) {
        numIslandRec(i, j + 1, n, m, grid,area)
    }
    if (isValid(i, j - 1, n, m, grid,area)) {
        numIslandRec(i, j - 1, n, m, grid,area)
    }
}

var maxAreaOfIsland = function (grid) {
    let n = grid.length
    let m = grid[0].length
    let ans = 0
    let arr = []
    let area=0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                
                area = numIslandRec(i, j, n, m, grid,area)
                ans = Math.max(ans,area)
            }
        }
    }

    
    return ans
};


console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]))
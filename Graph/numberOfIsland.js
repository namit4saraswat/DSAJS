/**
 * @param {character[][]} grid
 * @return {number}
 */

function isValid(i, j, n, m, grid) {
    if (i < n && i >= 0 && j < m && j >= 0 && grid[i][j] === '1') {
        return true
    }

    return false
}

function numIslandRec(i, j, n, m, grid) {
    grid[i][j] = '0'
    if (isValid(i + 1, j, n, m, grid)) {
        numIslandRec(i + 1, j, n, m,grid)
    }
    if (isValid(i - 1, j, n, m, grid)) {
        numIslandRec(i - 1, j, n, m,grid)
    }
    if (isValid(i, j + 1, n, m, grid)) {
        numIslandRec(i, j + 1, n, m, grid)
    }
    if (isValid(i, j - 1, n, m, grid)) {
        numIslandRec(i, j - 1, n, m, grid)
    }

}

var numIslands = function (grid) {
    let n = grid.length
    let m = grid[0].length
    let ans = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; i < m; j++) {
            if (grid[i][j] === '1') {
                ans++
                numIslandRec(i, j, n, m, grid)
            }
        }
    }

    return ans
};


console.log(numIslands([["1", "1", "1", "1", "0"],
["1", "1", "0", "1", "0"],
["1", "1", "0", "0", "0"],
["0", "0", "0", "0", "0"]]))
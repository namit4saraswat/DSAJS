/**
 * @param {number[][]} grid
 * @return {number}
 */

function isValid(x, y, grid) {
    let m = grid.length
    let n = grid[0].length
    if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] === 1) {
        return true
    }
    return false
}

function dfs(source, visited, grid) {
    visited[source[0]][[source[1]]] = true
    grid[source[0]][source[1]] = 2
    let r = [-1, 0, 1, 0]
    let c = [0, 1, 0, -1]
    for (let i = 0; i < r.length; i++) {
        x1 = source[0] + r[i]
        y1 = source[1] + c[i]
        if (isValid(x1, y1, grid)) {
            dfs([x1, y1], visited, grid)
        }
    }
}

var numEnclaves = function (grid) {
    let m = grid.length
    let n = grid[0].length
    let visited = new Array(m).fill(new Array(n).fill(false))
    for (let i = 0; i < grid.length; i++) {
        let j = 0
        if (grid[i][j] === 1) {
            dfs([i, j], visited, grid)
        }
        if (grid[i][n - 1] === 1) {
            dfs([i, n - 1], visited, grid)
        }
    }
    for (let i = 0; i < grid[0].length; i++) {
        let j=0
        if (grid[j][i] === 1) {
            dfs([j, i], visited, grid)
        }

        if (grid[m - 1][i] === 1) {
            dfs([m - 1, i], visited, grid)
        }
    }


let ans = 0
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 1) {
            ans++
        }
    }
}

return ans
};


console.log(numEnclaves([[0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1], [1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0], [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1], [1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0]]))
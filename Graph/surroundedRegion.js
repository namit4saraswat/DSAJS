/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function isValid(i, j, n, m, board) {
    if (i < n && i >= 0 && j < m && j >= 0 && board[i][j]==='O') {

        return true
    }

    return false
}

function solveUtil(i, j, n, m, board) {
    board[i][j]='B'
    if (isValid(i + 1, j, n, m, board)) {
        solveUtil(i + 1, j, n, m,board)
    }
    if (isValid(i - 1, j, n, m, board)) {
        solveUtil(i - 1, j, n, m,board)
    }
    if (isValid(i, j + 1, n, m, board)) {
        solveUtil(i, j + 1, n, m, board)
    }
    if (isValid(i, j - 1, n, m, board)) {
        solveUtil(i, j - 1, n, m, board)
    }

}

var convert = function(board,m,n){
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if(board[i][j]==='B'){
                board[i][j]='O'
            }
            else if(board[i][j]==='O'){
                board[i][j]='X'
            }
        }
    }
   

    return board
}
var solve = function (board) {
    let n = board.length
    let m = board[0].length
    
    for (let i = 0; i < n-1; i++) {
        if(board[i][0]==='O'){
            solveUtil(i,0,n,m,board)
        }
        if(board[0][i]==='O'){
            solveUtil(0,i,n,m,board)
        }

        if(board[n-1][i]==='O'){
            solveUtil(n-1,i,n,m,board)
        }

        if(board[i][m-1]===0){
            solveUtil(i,m-1,n,m,board)
        }
    }

    return convert(board,m,n)
};

console.log(solve([['O']]))
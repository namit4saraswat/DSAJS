/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let set1 = new Set();
    let set2 = new Set();
    let set3 = new Set();
    for(let x = 0; x < 9; x++) {
        for(let y = 0; y < 9; y++) {
            let xGrd =(Math.floor(y/3)) + (x%3)*3;
            let yGrd = y%3 + (Math.floor(x/3) * 3)

            if(set1.has(board[x][y])){
                return false;
            }
            if(board[x][y]>0){
                set1.add(board[x][y]);
            }

            if(set2.has(board[y][x])){
                return false;
            }
            if(board[y][x]>0){
                set2.add(board[y][x]);
            }

            if(set3.has(board[xGrd][ yGrd])){
                return false;
            }
            if(board[xGrd][ yGrd]>0){
                set3.add(board[xGrd][yGrd]);
            }

            
        }
        set1.clear();
        set2.clear();
        set3.clear();
    } 

    return true;
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));
/**
 * @param {number[][]} grid
 * @return {number}
 */


function isValid(i, j, n, m, grid) {
    if (i < n && i >= 0 && j < m && j >= 0 && grid[i][j] === 1) {
        return true
    }

    return false
}



var orangesRotting = function (grid) {
    let queue = []
    let ans = 0
    let n= grid.length
    let fresh=0
    let m= grid[0].length
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(grid[i][j]===2){
                queue.push([i,j])
            }else{
                if(grid[i][j]===1){
                    fresh++
                }
            }  
        }
    }

    while(queue.length!=0){
        if(fresh===0){
            return ans
        }
        let size=queue.length
        
        while(size>0){
        let source = queue.shift()
        let x1 =source[0]
        let y1=source[1]
        let r= [0,1,0,-1]
        let c= [1,0,-1,0]
        for(let i=0;i<r.length;i++){
            let x= r[i]+x1
            let y =c[i]+y1
            if(isValid(x,y,n,m,grid)){
                grid[x][y]=2
                queue.push([x,y])
                fresh--
            }
        }
        
        size--
    }
    ans++
    }

    return fresh===0 ? ans : -1
};


console.log(orangesRotting([[2,1,1],[1,2,0],[0,1,1]]))
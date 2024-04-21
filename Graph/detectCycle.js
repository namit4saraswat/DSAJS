/**
 * @param {character[][]} grid
 * @return {number}
 */

function containsCycle(grid) {
    let adjacencyList = {}
    let n=Math.max(grid.length,grid[0].length)
    while(n>=1){
        adjacencyList[n-1]=[]
        n--       
    }

    for(let i=0;i<edges.length;i++){
        adjacencyList[edges[i][0]].push(edges[i][1])
        adjacencyList[edges[i][1]].push(edges[i][0])
    }

    
    return ans
};


console.log(containsCycle([["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]))
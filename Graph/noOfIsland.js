/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let adjacencyList = {}
    let n=Math.max(grid.length,grid[0].length)
    let island=0
    while(n>=1){
        adjacencyList[n-1]=[]
        n--       
    }

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==='1'){
                adjacencyList[i].push(j)
            }
        }
    }

    var dfsUtil= function(source, visited) {
        visited[source] = true
        for (let i of adjacencyList[source].values()) {
            let n = i
            if (!visited[n]) {
                dfsUtil(n, visited)
            }
        }
    }

    let visited = new Array(Object.keys(adjacencyList).length).fill(false);
    for(let i=0;i<visited.length;i++){
        if(visited[i]===false && Object.values(adjacencyList[i]).length!=0){
            island++
            dfsUtil(i, visited)
        }
    }
    
    // for(let i=0;i<grid[0].length;i++){
    //     dfsUtil(i, visited)
    // }
    return island
};

console.log(numIslands([['1'],['1']]))
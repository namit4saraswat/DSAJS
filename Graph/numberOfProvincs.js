/**
 * @param {number[][]} isConnected
 * @return {number}
 */

function dfs(source,visited,adj){
    visited[source]=true
    for(let num of adj[source]){
        if(!visited[num]){
            dfs(num,visited,adj)
        }
    }
}

function createAdj(isConnected,n){
    let adj = {}
    for(let i=0;i<n;i++){
        adj[i]=[]
        for(let j=0;j<n ;j++){
            if(isConnected[i][j]===1){
                adj[i].push(j)
            }
        }
    }

    return adj
}
var findCircleNum = function(isConnected) {
    let n=isConnected.length
    let adj = createAdj(isConnected,n)
    let visited = new Array(n).fill(false)
    let ans=0
    for(let i=0;i<n;i++){
        if(!visited[i]){
            ans++
            dfs(i,visited,adj)
        }
    }

    return ans
    
};


console.log(findCircleNum( [[1,1,0],[1,1,0],[0,0,1]]))
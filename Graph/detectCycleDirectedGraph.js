var dfs = function(source,adj,visited,dfsVisited){
    visited[source]=true
    dfsVisited[source]=true
    for(let num of adj[source]){
        if(!visited[num]){
            if(dfs(num,adj,visited,dfsVisited)===true){
                return true
            }
        }else{
            if(dfsVisited[num]){
                return true
            }
        }
    }
    dfsVisited[source]=false
    return false
}

var isCycle = function(V,adj){
    let visited = new Array(V).fill(false)
    let dfsVisited = new Array(V).fill(false)
    return dfs(0,adj,visited,dfsVisited)
}

console.log(isCycle(8,[[1],[2],[3],[4],[5],[6,7],[],[3]]))

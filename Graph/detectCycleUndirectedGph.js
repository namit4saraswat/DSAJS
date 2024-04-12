var dfs = function(source,adj,visited,parent){
    visited[source]=true
    for(let num of adj[source]){
        if(!visited[num]){
            if(dfs(num,adj,visited,source) ===true){
                return true
            }
        }else{
            if(num!=parent){
                return true
            }
        }
    }
    return false
}

var isCycle = function(V, adj) {
    let visited = new Array(V).fill(false)
    return dfs(0,adj,visited,-1)
}

console.log(isCycle(5,[[1],[0,2,4],[1,3],[2,4],[1,3]]))

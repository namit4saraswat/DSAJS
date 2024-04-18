
function dfs(source,adj,stack, visited){
    visited[source]=true
    for(let num of adj[source]){
        if(!visited[num.node]){
            dfs(num.node,adj,stack,visited)
        }   
    }
    stack.push(source)
}

function topoSort(adj,visited){
    let stack = []
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            dfs(0,adj,stack, visited)
        }
    }
    return stack
}

function shortestPathDAG(adj,src,dst){
    let n= adj.length
    let distance = Array(n).fill(Infinity)
    let visited = Array(n).fill(false)
    let topo = topoSort(adj,visited)
    visited = Array(n).fill(false)
    distance[src]=0
    while(topo.length>0){
        let source = topo.pop()
        for(let num of adj[source]){
            if(!visited[num.node]){
                if(distance[num.node]>distance[source]+ num.weigth){
                    distance[num.node]=distance[source]+ num.weigth
                }
                if(num.node===dst){
                    return distance[num.node]
                }
                visited[num.node]=true
            } 
        }
    }
}

console.log(shortestPathDAG([[{node:4, weigth:1},{node:1, weigth:2}],[{node:2, weigth:3}],
    [{node:3, weigth:6}],[],[{node:2, weigth:2},{node:5, weigth:4}],[{node:3, weigth:1}]],1,3))
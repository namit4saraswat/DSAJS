function findMinimum(distance,idx){
    let min = Infinity
    let minIdx = -1
    for(let i=idx;i<distance.length;i++){
        if(min>distance[i]){
            min = distance[i]
            minIdx=i
        }
    }
    return minIdx
}

function dijkstra(adj,src){
    let distance = Array(adj.length).fill(Infinity)
    let visited = Array(adj.length).fill(false)
    distance[src]=0
    for(let count=0;count<visited.length;count++){
        let  u =findMinimum(distance,count) 
        visited[u]=true
        for(let v of adj[u]){
            if(!visited[v.node]){
                if(distance[v.node]>distance[u]+v.weigth){
                    distance[v.node]=distance[u]+v.weigth
                    
                }
            }
        }
    }

    return distance
    
}

console.log(dijkstra([[{node:1, weigth:5},{node:2, weigth:10}],[{node:0, weigth:5},{node:2, weigth:3},{node:3, weigth:20}],
    [{node:0, weigth:10},{node:1, weigth:3},{node:3, weigth:2}],[{node:1, weigth:20},{node:2, weigth:2}]],0))
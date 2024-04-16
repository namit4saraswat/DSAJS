function shortestPath(src, dst, adj) {
    let queue = []
    let distance = Array(adj.length).fill(Infinity)
    let parent = Array(adj.length).fill(-1)
    queue.push(src)
    distance[src] = 0
    while (queue.length != 0) {
        let source = queue.shift()
        for (let num of adj[source]) {
            if (distance[num] === Infinity) {
                distance[num] = distance[source] + 1
                parent[num] = source
                queue.push(num)
            }
        }
    }
    let i=dst
    let path = []
    path.push(dst)
    while(parent[i]!=-1){
        let prev = parent[i]
        path.push(prev)
        i=prev
    }

    console.log(path)
    // console.log(parent)
}


console.log(shortestPath(0, 7, [[1, 3], [0, 2], [1], [0, 7, 4], [3, 6, 7, 5], [6, 4], [4, 5, 7], [3, 4, 6]]))
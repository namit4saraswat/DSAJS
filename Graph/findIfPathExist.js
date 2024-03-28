/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let adjacencyList = {}
    while(n>=1){
        adjacencyList[n-1]=[]
        n--       
    }

    for(let i=0;i<edges.length;i++){
        adjacencyList[edges[i][0]].push(edges[i][1])
        adjacencyList[edges[i][1]].push(edges[i][0])
    }

    let queued = []
        let visited = new Array(Object.keys(adjacencyList).length).fill(false);

        visited[source] = true
        queued.push(source)

        while(queued.length!=0){
            const currentNode =  queued.shift()
            

            for(const neighbor of adjacencyList[currentNode]){
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    queued.push(neighbor)
                }
            }
        }
       
        

    return visited[destination]
};

console.log(validPath(6,[[0,1],[0,2],[3,5],[5,4],[4,3]], 0,5))
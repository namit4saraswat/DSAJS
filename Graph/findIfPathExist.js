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
        let currentNode = queued.shift()
        for(let nums of adjacencyList[currentNode]){
            if(nums===destination){
                return true
            }
            if(!visited[nums]){
                visited[nums]=true
                queued.push(nums)
            }
        }
    }

    return false
    
};


console.log(validPath(3,[[0,1],[1,2],[2,0]],0,2))
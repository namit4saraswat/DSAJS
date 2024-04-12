/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let adjList = {}
    let visited = new Array(n).fill(false)
    
    for(let i=0;i<edges.length;i++){
        if(!adjList[edges[i][0]]){
            adjList[edges[i][0]]=[]
        }
        if(!adjList[edges[i][1]]){
            adjList[edges[i][1]]=[]
        }
        adjList[edges[i][0]].push(edges[i][1])
        adjList[edges[i][1]].push(edges[i][0])
    }

    let queue=[]
    queue.push(source)
    while(queue.length!=0){
        let currentNode=queue.shift()
            for(let num of adjList[currentNode]){
                if(num===destination){
                    return true
                }
                if(!visited[num]){
                    visited[num]=true
                    queue.push(num)
                }
                
            }
        }
        
    
    return false
};

console.log(validPath(10,[[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]],5,9))
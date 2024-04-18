/**
 * @param {number[][]} graph
 * @return {number[]}
 */

var dfsUtil = function(){

}

var isCyclicUtilDirected = function(source,adj,visited,dfsVisited,presentCycle){
    visited[source] =true
    dfsVisited[source]=true
    for (let i of adj[source].values()) {
        
        if (!visited[i]) {
            if(isCyclicUtilDirected(i, adj,visited,dfsVisited,presentCycle) ===true){
                return presentCycle[source]=true
            }
        }else{
            if(dfsVisited[i]){
                return presentCycle[source]=true
            }
        }
    }
    dfsVisited[source]=false
    return false
}
var eventualSafeNodes = function(graph) {
    
    let visited = new Array(Object.keys(graph).length).fill(false);
    let presentCycle = new Array(Object.keys(graph).length).fill(false);
    let dfsVisited = new Array(Object.keys(graph).length).fill(false);
    for(let i = 0; i < visited.length; i++){
        if(visited[i] === false){
            isCyclicUtilDirected(i, graph, visited,dfsVisited,presentCycle)
        }
                
    }
    let ans=[]
    for(let i=0;i<presentCycle.length;i++){
        if(!presentCycle[i]){
            ans.push(i)
        }
    }

    return ans
};

console.log(eventualSafeNodes([[1,2],[2],[0,3],[]]))
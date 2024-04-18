/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var isCyclicUtilDirected = function(source,adj,visited,dfsVisited){
    visited[source] =true
    dfsVisited[source]=true
    for (let i of adj[source].values()) {
        
        if (!visited[i]) {
            if(isCyclicUtilDirected(i, adj,visited,dfsVisited) ===true){
                return true
            }
        }else{
            if(dfsVisited[i]){
                return true
            }
        }
    }
    dfsVisited[source]=false
    return false
}

var canFinish = function(numCourses, prerequisites){
    let i=numCourses-prerequisites.length
    let adjacencyList = {}
    while(numCourses>0){
        numCourses--
        adjacencyList[numCourses] = [];
    }
    
    for(let i=0;i<prerequisites.length;i++){
        if(prerequisites[i].length>0){
            adjacencyList[prerequisites[i][1]].push(prerequisites[i][0])
        }
    } 
    // while(i>0){
    //     prerequisites.push([])
    //     i--
    // }
    
    
    let visited = new Array(prerequisites.length-1).fill(false);
    let dfsVisited = new Array(prerequisites.length-1).fill(false);
    for(let i = 0; i < visited.length; i++){
        if(visited[i] === false){
            if(isCyclicUtilDirected(i, adjacencyList, visited,dfsVisited)===true){
                return false
            }
        }
                
    }
    return true
};





console.log(canFinish(1,[1]))
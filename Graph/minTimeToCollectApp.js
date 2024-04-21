/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
function dfs(source,myCost,hasApple){
   if(visited[source]){
    return 0
   }

   let childCost=0
   for(let child of adj[source]){
    childCost += adj(child,2,hasApple)
   }
   if(childCost===0 && !(hasApple[source])){
    return 0
   }
}
function createAdj(adj,edges){
    for(let i=0;i<edges.length;i++){
        adj[edges[i][0]].push(edges[i][1])
    }
    return adj
}
var minTime = function(n, edges, hasApple) {
    //create adj 
    let adj =  Array(n).fill().map(() => Array())
    let visited=Array(n).fill(false)
    adj = createAdj(adj,edges)
    let apple=0
    
    let time=0
    time=dfs(0,visited,adj,2,hasApple)
    return time
};

console.log(minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,true,true,false]))
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */



var allPathsSourceTarget = function(graph) {
    let ans = []
    
    let dfs = function(node, path){
        if(node===graph.length-1){
            ans.push(path)
        }
    
    for(let adjacent of graph[node]){
        dfs(adjacent,path.concat([adjacent]))
        }
    }
    dfs(0,[0])

    return ans
};

console.log(allPathsSourceTarget( [[4,3,1],[3,2,4],[3],[4],[]]))



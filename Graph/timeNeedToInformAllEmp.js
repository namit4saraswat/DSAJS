/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
function bfs(source,adj,visited,time,
    informTime){
    let queue=[]
    queue.push(source)
    time = informTime[source]
    while(queue.length!=0){
        let max=0
       
            source = queue.shift()
            visited[source]=true
            for(let num of adj[source]){
                if(!visited[num]){
                    queue.push(num)
                    max=Math.max(informTime[num],max)
                }
            }
        
        time = time + max
    }

    return time
    
}
var numOfMinutes = function(n, headID, manager, informTime) {
    //create adj
    let adj =  Array(n).fill().map(() => Array())
    let visited = Array(n).fill(false)
    for(let i=0;i<manager.length;i++){
        if(i===headID){
            continue
        }
        adj[manager[i]].push(i)
    }
    let time=0
    time = bfs(headID, adj, visited,time,informTime)
    return time
};

console.log(numOfMinutes(11,4,[5,9,6,10,-1,8,9,1,9,3,4],[0,213,0,253,686,170,975,0,261,309,337]))
//11,4,[5,9,6,10,-1,8,9,1,9,3,4],[0,213,0,253,686,170,975,0,261,309,337]
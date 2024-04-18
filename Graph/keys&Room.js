/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

function dfs(source,visited,rooms) {
    visited[source] = true
        for(let num of rooms[source]){
            if(!visited[num]){
                dfs(num,visited,rooms)
            }
        }
    return visited
    
}


var canVisitAllRooms = function(rooms) {
    let visited = Array(rooms.length).fill(false)
    visited = dfs(0,visited, rooms)
    
    for(let num of visited){
        if(!num){
            return false
        }
    }
    return true
};

console.log(canVisitAllRooms([[1],[2],[3],[]]))
function canFinishUtil(source, visited, dfsVisited) {
    visited[source] = true
    for (let nums of prerequisites[source]) {
        if (!visited[nums]) {
            if (canFinishUtil(nums, visited, dfsVisited)) {
                return true
            }
        } else {
            if (!dfsVisited[nums]) {
                return true
            }
        }
    }
    dfsVisited[source] = true
    return false
}

var canFinish = function (numCourses, prerequisites) {
    let visited = Array(numCourses).fill(false)
    let dfsVisited = Array(numCourses).fill(false)
    canFinishUtil(0, visited, dfsVisited,prerequisites)
};
class Graph {
    constructor() {
        this.adjacencyList = []
        this.queue = []
        this.map = new Map()
    }

    addVertex(nums){
        for(let i of nums){
            this.adjacencyList.push([])
        }
    }

    addEdges(nums){
        for(let i of nums){
            this.adjacencyList[i[0]].push(i[1])
        }
    }

    bfs(vertex){
        let q = []
        q.push(vertex)
        let visited = Array(this.adjacencyList.length).fill(false)
        while(q.length>0){
            let node = q.shift()
            visited[node]=true
            console.log(node)
            for(let i of this.adjacencyList[node]){
                if(!visited[i]){
                    q.push(i)
                }
            }
        }
    }

    dfsUtil(source, visited){
        console.log(source)
        visited[source]=true
        for(let num of this.adjacencyList[source]){
            if(!visited[num]){
                this.dfsUtil(num, visited)
            }
        }
        return
    }

    dfs(vertex){
        let visited = Array([this.adjacencyList.length]).fill(false)
        this.dfsUtil(vertex,visited)
    }
}

let gph = new Graph
gph.addVertex([0,1,2,3,4])
gph.addEdges([[0,1],[0,2],[0,3],[2,4]])
gph.dfs(0)
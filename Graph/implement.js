class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(u,v){
        this.adjacencyList[u].push(v)
        this.adjacencyList[v].push(u)
    }

    bfsTraversal(source){
        let queued = []
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);

        visited[source] = true
        queued.push(source)

        while(queued.length!=0){
            const currentNode =  queued.shift()
            console.log(currentNode)

            for(const neighbor of this.adjacencyList[currentNode]){
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    queued.push(neighbor)
                }
            }
        }
       
    }

    printGraph(){
        console.log(this.adjacencyList)
    }
}

let obj = new Graph()
obj.addVertex(0)
obj.addVertex(1)
obj.addVertex(2)
obj.addVertex(3)
obj.addVertex(4)
obj.addEdge(0,1)
obj.addEdge(0,2)
obj.addEdge(1,3)
obj.addEdge(1,2)
obj.addEdge(2,3)
obj.addEdge(2,4)
obj.addEdge(3,4)
obj.printGraph()
obj.bfsTraversal(0)

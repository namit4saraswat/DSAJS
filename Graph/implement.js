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

    printGraph(){
        console.log(this.adjacencyList)
    }
}

let obj = new Graph()
obj.addVertex(0)
obj.addVertex(1)
obj.addVertex(2)
obj.addVertex(3)
obj.addEdge(0,1)
obj.addEdge(1,2)
obj.addEdge(0,2)
obj.addEdge(2,3)
obj.printGraph()

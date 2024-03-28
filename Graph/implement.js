class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(u, v) {
        this.adjacencyList[u].push(v)
        this.adjacencyList[v].push(u)
    }

    bfsTraversal(source) {
        let queued = []
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);

        visited[source] = true
        queued.push(source)

        while (queued.length != 0) {
            const currentNode = queued.shift()
            console.log(currentNode)

            for (const neighbor of this.adjacencyList[currentNode]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queued.push(neighbor)
                }
            }
        }

    }

    dfsUtil(source, visited) {
        visited[source] = true
        console.log(source)

        for (let i of this.adjacencyList[source].values()) {
            let n = i
            if (!visited[n]) {
                this.dfsUtil(n, visited)
            }
        }
    }

    dfsTraversal(source) {
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        this.dfsUtil(source, visited)
    }

    isCyclicUtil(source, visited, parent) {

        visited[source] = true

        for (let i = 0; i < this.adjacencyList[source].length; i++) {
            if(!visited[this.adjacencyList[source][i]]){
                if(this.isCyclicUtil(this.adjacencyList[source][i],visited, source)){
                    return true
                }
            }else{
                if(parent != this.graph[v][i]){
                    return true;
                }
            }
        }
    }

    isCyclic() {
        let visited = new Array((this.adjacencyList).length).fill(false);
        for (let i = 0; i < this.adjacencyList.length; i++) {
            if (visited[i] == false) {
                this.isCyclicUtil()
            }
        }
    }
        printGraph(){
            console.log(this.adjacencyList)
        }
    
    }

let obj = new Graph()
obj.addVertex(4)
obj.addVertex(1)
obj.addVertex(2)
obj.addVertex(3)
obj.addVertex(0)
obj.addEdge(0, 1)
obj.addEdge(1, 3)
obj.addEdge(1, 2)
obj.addEdge(2, 3)
obj.printGraph()
console.log(obj.isCyclic(-1, 0))
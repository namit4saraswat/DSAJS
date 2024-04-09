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

    addEdgeDirected(u, v) {
        this.adjacencyList[u].push(v)
    }

    bfsTraversal(source) {
        let queued = []
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);

        visited[source] = true
        queued.push(source)
        while(queued.length!=0){
            let currentNode = queued.shift()
            console.log(currentNode)
            for(let nums of this.adjacencyList[currentNode]){
                if(!visited[nums]){
                    visited[nums]=true
                    queued.push(nums)
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

    isCyclicUtil(source,visited,parent){
        
        visited[source] =true
        for (let i of this.adjacencyList[source].values()) {
            
            let n = i
            if (!visited[n]) {
                if(this.isCyclicUtil(n, visited,source) ===true){
                    return true
                }
            }else{
                if(source!=parent){
                    return true
                }
            }
        }

        return false

    }

    isCyclic(){
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        for(let i = 0; i < visited.length; i++){
            // Don't recur for u if it
            // is already visited
            if(visited[i] == false){
                if(this.isCyclicUtil(i, visited, -1) === true){
                    return true;
                }
            }
                 
        }
    }

    topologicalSortUtil(source, visited, stack){
        visited[source]=true

        for(let num of this.adjacencyList[source].values()){
            if(!visited[num]){
                this.topologicalSortUtil(num,visited,stack)
            }
        }

        stack.push(source)
    }

    topologicalSort(source){
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        let stack = []
        for(let i=0;i<visited.length;i++){
            if(!visited[i]){
                this.topologicalSortUtil(i,visited, stack)
            }
        }

        console.log("Topological sorting of the graph: ");
        while (stack.length > 0) {
        console.log(stack.pop() + " ");
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
obj.addVertex(5)
obj.addEdgeDirected(5,1)
obj.addEdgeDirected(5,2)
obj.addEdgeDirected(1,3)
obj.addEdgeDirected(2,3)
obj.addEdgeDirected(0,4)
obj.addEdgeDirected(0,3)
// obj.printGraph()
// obj.dfsTraversal(5)
obj.topologicalSort(5)
class Graph {
    constructor() {
        this.adjacencyList = {}
        this.queue = []
        this.map = new Map()
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        this.map.set(vertex,0)
    }

    addEdge(u, v) {
        this.adjacencyList[u].push(v)
        this.adjacencyList[v].push(u)
    }

    addEdgeDirected(u, v) {
        this.map.set(v,this.map.get(v)+1)
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
            
            if (!visited[i]) {
                if(this.isCyclicUtil(i, visited,source) ===true){
                    return true
                }
            }else{
                if(i!=parent){
                    return true
                }
            }
        }

        return false

    }

    isCyclic(){
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        for(let i = 0; i < visited.length; i++){
            if(visited[i] === false){
                if(this.isCyclicUtil(i, visited, -1) === true){
                    return true;
                }
            }
                 
        }

        return false
    }

    isCyclicUtilDirected(source,visited,dfsVisited){
        visited[source] =true
        for (let i of this.adjacencyList[source].values()) {
            
            if (!visited[i]) {
                if(this.isCyclicUtilDirected(i, visited,dfsVisited) ===true){
                    return true
                }
            }else{
                if(dfsVisited[i]===false){
                    return true
                }
            }
        }
        dfsVisited[source]=true
        return false

    }

    isCyclicDirected(){
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        let dfsVisited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        for(let i = 0; i < visited.length; i++){
            if(visited[i] === false){
                if(this.isCyclicUtilDirected(i, visited,dfsVisited) === true){
                    return true;
                }
            }
                 
        }

        return false
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

    queueUpdate(){
        for(let num of this.map.keys()){
            if(this.map.get(num)===0){
                this.queue.push(num)
            }
        }
    }
    
    
    queueTopological(){
        this.queueUpdate()
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        

        while(this.queue.length!=0){
            let u = this.queue.shift()
            console.log(u)

            for(let num of this.adjacencyList[u].values()){
                if(!visited[num]){
                    this.map.set(num,this.map.get(num)-1)
                    if(this.map.get(num)===0){
                        this.queue.push(num)
                    }
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
obj.addVertex(5)
obj.addVertex(6)
obj.addVertex(7)
obj.addEdgeDirected(0,1)
obj.addEdgeDirected(1,2)
obj.addEdgeDirected(2,3)
obj.addEdgeDirected(4,3)
obj.addEdgeDirected(1,4)
obj.addEdgeDirected(5,0)
obj.addEdgeDirected(5,6)
obj.addEdgeDirected(6,7)
obj.addEdgeDirected(5,7)
// obj.addEdgeDirected(4,3)
// obj.addEdgeDirected(1,4)
console.log(obj.isCyclicDirected())
// obj.printGraph()
// obj.dfsTraversal(5)

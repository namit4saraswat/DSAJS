class Graph {
    constructor() {
        this.adjacencyList ={}
        this.queue = []
        this.map = new Map()
    }   

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        this.map.set(vertex,0)// this is not needed, did for a particular case
    }

    addEdge(u, v) {
        this.adjacencyList[u].push(v)
        this.adjacencyList[v].push(u)
    }

    addWeightedEdge(u, v, w) {
        this.adjacencyList[u].push({node: v,weight:w})
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
            if (!visited[i]) {
                this.dfsUtil(i, visited)
            }
        }
    }

    shortPathUtil(source) {
        let queued = []
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        let distance = new Array(Object.keys(this.adjacencyList).length).fill(Infinity);
        visited[source] = true
        queued.push(source)
        distance[source]=0
        while(queued.length!=0){
            let currentNode = queued.shift()
            for(let nums of this.adjacencyList[currentNode]){
                if(!visited[nums]){
                    distance[nums]=distance[currentNode]+1
                    visited[nums]=true
                    queued.push(nums)
                }
            }
        }
        
        return distance
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
        dfsVisited[source]=true
        for (let i of this.adjacencyList[source].values()) {
            
            if (!visited[i]) {
                if(this.isCyclicUtilDirected(i, visited,dfsVisited) ===true){
                    return true
                }
            }else{
                if(dfsVisited[i]){
                    return true
                }
                
                
            }
        }
        dfsVisited[source]=false
        return false

    }

    isCyclicDirected(){
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        let dfsVisited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        for(let i = 0; i < visited.length; i++){
            if(visited[i] === false){
                if(this.isCyclicUtilDirected(i, visited, dfsVisited) === true){
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

    topologicalSort(){
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
        //map => track of inorder of all nodes
        let i=0
        while(this.queue.length-i>0){
            let u = this.queue[i]
            i++
            // console.log(u)
            

            for(let num of this.adjacencyList[u].values()){
                if(!visited[num]){
                    this.map.set(num,this.map.get(num)-1)
                    if(this.map.get(num)===0){
                        this.queue.push(num)
                    }
                }
            }

        }
        return this.queue
        
    }

    shortestPath(source){
        return(this.shortPathUtil(source))
    }

    shortPathUtil(u, visited,distance) {
        visited[u] = true
        for (let v of this.adjacencyList[u].values()) {
            distance[v.node]=Math.min(distance[v.node],v.weight+ distance[u])
            if (!visited[v.node]) {
                this.shortPathUtil(v.node, visited,distance)
            }
        }
        return distance
    }

    shortestPathDAG(source){
        let visited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        let distance = new Array(Object.keys(this.adjacencyList).length).fill(Infinity);
        distance[source]=0
        let topoQueue = this.queueTopological()
        while(topoQueue.length!=0){
            let u = topoQueue.shift()
            distance=this.shortPathUtil(u,visited,distance)
        }
        console.log(distance) 
    }
    // Prim's Algo ************start************
    minKey(key,mstSet){
        let min = Number.MAX_VALUE
        let minIdx=0
        for(let i=0;i<mstSet;i++){
            if(key[i]<min && !mstSet[i]){
                min=key[i]
                minIdx=i
            }
        }
        return minIdx
    }

    primMst(graph,V){
        //Array to store constructed MST
        let ans = []
        //To store Min weight 
        let key = []
        //To store set of vertices to be  included in ans
        let mstSet=[]

        key = new Array(V).fill(Infinity)
        key[0]=0
        ans[0]=-1

        for(let count=0;count<V;count++){

            // Pick the minimum key vertex from the 
            // set of vertices not yet included in MST 
            let u = this.minKey(key,mstSet)

            //Add the returned vertex to MST
            mstSet[u]=true

            // Update key value and parent index of 
            // the adjacent vertices of the picked vertex. 
            // Consider only those vertices which are not 
            // yet included in MST
            for (let v = 0; v < V; v++){
                if(!mstSet[v] && graph[u][v] && graph[u][v]<key[v]){
                    key[v]=graph[u][v]
                    ans[v]=u
                }
            } 
        }

        console.log(ans)

    }
    
    
    printGraph(){
        console.log(this.adjacencyList)
    }
    
    }

let obj = new Graph()
// obj.addVertex(0)
// obj.addVertex(1)
// obj.addVertex(2)
// obj.addVertex(3)
// // obj.addVertex(4)
// // obj.addVertex(5)
// // obj.addVertex(6)
// // obj.addVertex(7)
// obj.addWeightedEdge(0,1,5)
// obj.addWeightedEdge(1,3,15)
// obj.addWeightedEdge(0,2,8)
// obj.addWeightedEdge(1,2,10)
// // obj.addWeightedEdge(4,5,4)
// // obj.addWeightedEdge(5,3,1)
// obj.addWeightedEdge(2,3,20)
// obj.addWeightedEdge(4,5)
// obj.addWeightedEdge(5,3)
// obj.addEdgeDirected(1,4)
// obj.addEdgeDirected(2,0)
// obj.addEdgeDirected(2,5)
// obj.addEdgeDirected(1,0)
// obj.addEdgeDirected(1,4)
// obj.addEdgeDirected(5,3)
// obj.addEdgeDirected(3,4)

// obj.addEdgeDirected(4,3)
// obj.addEdgeDirected(1,4)
obj.primMst([ [ 0, 2, 0, 6, 0 ], 
    [ 2, 0, 3, 8, 5 ], 
    [ 0, 3, 0, 0, 7 ], 
    [ 6, 8, 0, 0, 9 ], 
    [ 0, 5, 7, 9, 0 ] ],5)
// obj.printGraph()
// obj.dfsTraversal(5)

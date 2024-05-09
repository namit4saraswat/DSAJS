class Graph {
    constructor() {
        this.adjacencyList = []
        this.queue = []
        this.map = new Map()
    }


    addVertex(nums) {
        for (let i of nums) {
            this.adjacencyList.push([])
            this.map.set(i,0)
        }
    }
    addEdgesUndirected(nums) {
        for (let i of nums) {
            this.adjacencyList[i[0]].push(i[1])
            this.adjacencyList[i[1]].push(i[0])
        }
    }
    addEdgesdirected(nums) {
        for(let i of nums) {
            this.adjacencyList[i[0]].push(i[1])
            //for kahn's algo creating map to keep track for inorder
            this.map.set(i[1],this.map.get(i[1])+1)
        }
    }

    shortestPath(src,destination){
        let visited= Array(this.adjacencyList.length).fill(false)
        let distance= Array(this.adjacencyList.length).fill(Infinity)
        let q=[]
        q.push(src)
        distance[src]=0
        while(q.length>0){
            let n =q.shift()
            visited[n]=true
            for(let nums of this.adjacencyList[n]){
                if(!visited[nums]){
                    distance[nums]=distance[n]+1
                    if(nums===destination){
                        return distance[nums]
                    }
                    q.push(nums)
                }
            }
        }
    }
}

let gph = new Graph()
gph.addVertex([0,1,2,3,4,5])
gph.addEdgesUndirected([[1,2],[1,0],[0,3],[3,5],[4,5],[3,4]])
console.log(gph.shortestPath(1,5))
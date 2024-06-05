class Graph {
    constructor() {
        this.adjacencyList = []
        this.queue = []
        this.map = new Map()
    }

    addVertex(nums){
        for(let i=0;i<nums.length;i++){
            this.adjacencyList.push([])
        }
    }

    addEdges(nums){
        for(let i=0;i<nums.length;i++){
            this.adjacencyList[nums[i][0]].push(nums[i][1])
        }
    }
}

let gph = new Graph
gph.addVertex([1,2,3,4,5])
gph.addEdges([[1,2],[1,4],[2,3],[4,5]])
console.log(gph.adjacencyList)
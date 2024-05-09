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

    addWeightedDirectedEdges(nums){
        for(let i of nums) {
            this.adjacencyList[i[0]].push({node:i[1],weigth:i[2]})
        }
    }

    addWeightedUnDirectedEdges(nums){
        for(let i of nums) {
            this.adjacencyList[i[0]].push({node:i[1],weigth:i[2]})
            this.adjacencyList[i[1]].push({node:i[0],weigth:i[2]})
        }
    }
    bfs(source) {
        let q = []
        let visited = Array(this.adjacencyList.length).fill(false)
        q.push(source)
        visited[source]=true
        while (q.length > 0) {
            source = q.shift()
            console.log(source)
            for (let nums of this.adjacencyList[source]) {
                if (!visited[nums]) {
                    q.push(nums)
                    visited[nums] = true
                }
            }
        }
    }

    ifPathExist(n,edges,source,destination){
        this.addVertex([0,1,2])
        this.addEdgesUndirected(edges)
        if(source===destination){
            return true
        }

        let q=[]
        let visited= Array(this.adjacencyList.length).fill(false)
        q.push(source)
        while(q.length>0){
            source=q.shift()
            visited[source]=true
            for(let nums of this.adjacencyList[source]){
                if(!visited[nums]){
                    if(nums===destination){
                        return true
                    }
                    visited[nums]=true
                    q.push(nums)
                }
            }
        }

        return false

    }

    dfsUtil(source,visited,stk){
        visited[source]=true
        for(let nums of this.adjacencyList[source]){
            if(!visited[nums]){
                this.dfsUtil(nums,visited,stk)
            }
        }
        stk.push(source)
    }

    dfs(source){
        let visited = Array(this.adjacencyList.length).fill(false)
        let stk=[]
        for(let i=0;i<visited.length;i++){
            if(!visited[i]){
                this.dfsUtil(i,visited,stk)
            }
            
        }

        console.log(stk)
        }
        

    detectCycleUtil(source,visited,parent){
        visited[source]=true
        for(let nums of this.adjacencyList[source]){
            if(!visited[nums]){
                if(this.detectCycleUtil(nums,visited,source)){
                    return true
                }
            }else{
                if(parent !=nums){
                    return true
                }
            }
        }
        return false
    }

    detectCycle(){
        let visited= Array(this.adjacencyList.length).fill(false)
        return this.detectCycleUtil(0,visited,-1)
    }

    kahnAlgo(){
        let q=[]
        for(let i=0;i<this.adjacencyList.length;i++){
            if(this.map.get(i)===0){
                q.push(i)
            }
        }
        while(q.length>0){
            let n = q.shift()
            console.log(n)
            for(let nums of this.adjacencyList[n]){
                this.map.set(nums,this.map.get(nums)-1)
                if(this.map.get(nums)===0){
                    q.push(nums)
                }
                
            }
        }
    }

    detectCycleDirectedUtil(source,visited,dfsVisited){
        visited[source]=true
        for(let nums of this.adjacencyList[source]){
            if(!visited[nums]){
                if(this.detectCycleDirectedUtil(nums,visited,dfsVisited)){
                    return true
                }
            }else{
                if(!dfsVisited[nums]){
                    return true
                }
            }
        }  
        dfsVisited[source]=true
        return false
    }
    detectCycleDirected(){
        let visited = Array(this.adjacencyList.length).fill(false)
        let dfsVisited = Array(this.adjacencyList.length).fill(false)
        console.log(this.detectCycleDirectedUtil(0,visited,dfsVisited))
        console.log(visited)
        console.log(dfsVisited)
    }

    shortestPathInDAG(source){
        let visited = Array(this.adjacencyList.length).fill(false)
        let distance = Array(this.adjacencyList.length).fill(Infinity)
        let q=[]
        distance[source]=0
        q.push(source)
        while(q.length>0){
            let n = q.shift()
            visited[n]=true
            for(let nums of this.adjacencyList[n]){
                if(!visited[nums.node]){
                    distance[nums.node]=Math.min(distance[nums.node],nums.weigth+distance[n])
                }
                q.push(nums.node)
            }
        }
        console.log(distance[3])
    }

    minSpaningTreeUtil(source,visited,sum){
        visited[source]=true
        for(let nums of this.adjacencyList[source]){
            if(!visited[nums]){
                sum = Math.min(sum)
            }
        }
    }
    minSpaningTree(){
        let mset = [0,1,2,3]
        let visited = Array(this.adjacencyList.length).fill(false)
        let set = []
        let distance=Infinity
        let tDistance = 0
        let min
        let i=0
        visited[mset[0]]=true
        set.push(mset[0])
        while(mset.length>1){
            let size= set.length
            while(size>0){
                let node = set[i]
                i++
                for(let nums of this.adjacencyList[node]){
                    if(!visited[nums.node]){
                        if(distance>nums.weigth){
                            distance=nums.weigth
                            min = nums.node
                        }
                    }
                }
                size--
            }
            set.push(min)
            mset.shift()
            visited[min]=true
            tDistance = tDistance + distance
            distance=Infinity
            i=0
        }
        console.log(set)

        return tDistance
    }

    dfs2(source,out,ans,dest){
        
        for(let nums of this.adjacencyList[source]){
            
                out.push(nums)
                if(nums===dest){
                    ans.push([...out])
                }
                this.dfs2(nums,out,ans,dest)
                   }
        out.pop()
    }

    allPossiblePath(){
        let source = 0
        let dest = 4
        let visited = Array(dest).fill(false)
        let ans=[[]]
        let out = []
        out.push(source)
        this.dfs2(source,out,ans,dest)
        return ans
    }
}

let gph = new Graph()
gph.addVertex([0,1,2,3,4])
gph.addEdgesdirected([[0,1],[0,4],[0,3],[1,3],[1,2],[1,4],[2,3],[3,4]])
// gph.addWeightedUnDirectedEdges([[0,1,5],[0,2,8],[1,2,10],[1,3,15],[2,3,20]])
console.log(gph.allPossiblePath())


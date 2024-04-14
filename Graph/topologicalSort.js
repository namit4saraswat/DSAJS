// Using stack


var dfsStack = function(source, stack, visited, adj){
    visited[source]=true
    for(let num of adj[source]){
        if(!visited[num]){
            dfsStack(num, stack, visited, adj)
        }
    }
    stack.push(source)
}

var stackTopologicalSort = function(V,adj){
    let stack = []
    let visited = new Array(V).fill(false)
    for(let i=0;i<V;i++){
        if(!visited[i]){
            dfsStack(i,stack,visited,adj)
        }
    }

    console.log(stack)
}
// Topological sort using queue - Kahn's algo

var queueTopoSort = function(V,adj){
    let visited = new Array(V).fill(false)
    let inOrder = new Array(V).fill(0)
    let queue = []
    for(let i=0;i<V;i++){
        for(num of adj[i]){
            inOrder[num]++
        }   
    }

    for(let i=0;i<V;i++){
        if(inOrder[i]===0){
            queue.push(i)
        }
    }

    while(queue.length!=0){
        let source = queue.shift()
        console.log(source)
        if(!visited[source]){
            for(let num of adj[source]){
                inOrder[num]--
                if(inOrder[num]===0){
                    queue.push(num)
                }
            }
        }
    }
}
queueTopoSort(6,[[],[],[3],[1],[0,1],[0,2]])


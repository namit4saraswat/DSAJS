function dfs(source, adj, stack,visited){
    stack.push(source)
    visited[source]=true
    for(let num of adj[source]){
        if(!visited[num]){
            dfs(num, adj, stack,visited)
        }
    }
    return stack
}

function dfs2(source, adj,visited){
    visited[source]=true
    // console.log(source)
    for(let num of adj[source]){
        if(!visited[num]){
            
            dfs2(num, adj,visited)
        }
    }
    return visited
}

function reverseAdj(adj){
    let revAdj = Array(adj.length)
    let n=adj.length
    while(n>0){
        revAdj[n-1]=[]
        n--
    }
    for(let i=0;i<adj.length;i++){
        for(let num of adj[i]){
            revAdj[num].push(i)
        }
    }

    return revAdj
}
function kosaraju(adj){
    let scc=0
// 1.Sort all edges according to finishing time
    let stack=[]
    let visited=Array(adj.length).fill(false)
    stack = dfs(0,adj,stack,visited)
    
// 2. Reverse the graph
    let revAdj = reverseAdj(adj)
    // console.log(revAdj)
// 3. do dfs from taking values from stack
    visited=Array(adj.length).fill(false)
    while(stack.length>0){
        let src= stack.shift()
        if(!visited[src]){
            scc++
            // console.log('\n')
            visited = dfs2(src,revAdj,visited)
        }  
    }

    console.log(scc)
    // return scc
}

kosaraju( [[1,3],[3,0,1],[2],[0]])
// Test case: [[1],[2,3],[3,5],[0,4],[5],[6],[4]]
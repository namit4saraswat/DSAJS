var levelOrder = function(root) {
    let ans = []
    if(!root){
        return
    }
    let queue=[]
    queue.push(root[0])
    while(queue.length>0){
        let size=queue.size()
        while(size>0)
        {
            let node = queue.shift()
            console.log(node)
            queue.push(node.left)
            queue.push(node.right)
            size--
        }
    }
};
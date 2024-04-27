const { default: build } = require("next/dist/build")

class Node {
    constructor(data, left, right){
        this.data = data
        this.left = left
        this.right = right
        
    }
}
let preIdx=0
function buildTreeUtil(preOrder, inOrder, start, end){
    if(start>end){
        return null
    }

    let root = new Node(preOrder[preIdx])
    preIdx++

    let inIdx

    for(let i=0;i<inOrder.length;i++){
        if(root.data === inOrder[i]){
            inIdx=i
            break
        }
    }

    root.left = buildTreeUtil(preOrder,inOrder,start,inIdx-1)
    root.right = buildTreeUtil(preOrder,inOrder,inIdx+1,end)
    return root
}

var buildTree = function(preorder, inorder) {
    buildTreeUtil(preorder,inorder,0,inorder.length-1)

};

let r =buildTree([ 'A', 'B', 'D', 'E', 'C', 'F'],[ 'D', 'B', 'E', 'A', 'F', 'C' ])
console.log(r)
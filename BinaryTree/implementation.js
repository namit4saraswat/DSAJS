class Node {
    constructor(data, left, right){
        this.data = data
        this.left = left
        this.right = right
        
    }
}


class Tree {
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data)

        if(this.root){
            this.insertNode(this.root, newNode)
        }else{
            this.root = newNode
        }

    }

    insertNode(node, newNode){
        if(node.data > newNode.data){
            if(node.left == null){
                node.left = newNode
            }else{
                this.insertNode(node.left, newNode)
            }
        }else{
            if(node.right == null){
                node.right = newNode
            }else{
                this.insertNode(node.right, newNode)
            }
        }
    }

    ////Traversal////
    inorder(node){
        if(node){
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }

    preOrder(node){
        if(node){
            console.log(node.data)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    postOrder(node){
        if(node){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.data)
        }
    }

    maxDepth(root){
        if(!root){
            return 0
        }
        let leftDepth = this.maxDepth(root.left);
        let rightDepth = this.maxDepth(root.right);
        return  Math.max(leftDepth, rightDepth) + 1
        
    }

    sameTree(node1, node2){
        if(node1){
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }

    //DFS
    maxDepth2(node){
        
    }

    //BFS
    maxDepth2(node){
        
    }

}

const bt = new Tree();
bt.insert(3)
bt.insert(9)
bt.insert(20)
bt.insert(null)
bt.insert(null)
bt.insert(15)
bt.insert(7)
console.log(bt.maxDepth(bt.root))
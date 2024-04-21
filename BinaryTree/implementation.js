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

    buildTree(nums){

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

    levelOrder(root) {
        if(!root){
            return
        }
        let queue=[]
        queue.push(root[0])
        while(queue.length>0){
            let size=queue.length
            while(size>0)
            {
                let node = queue.shift()
                console.log(node)
                if(node.left){
                    queue.push(node.left)
                }
                if(node.right){
                queue.push(node.right)
                }
                size--
            }
        }
    };

}


const bt = new Tree();
bt.buildTree(){
    
}
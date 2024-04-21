class Node {
    constructor(data, left, right){
        this.data = data
        this.left = left
        this.right = right
        
    }
}

//buildTree using recursion
function buildTreeRecur(nums,i){
    if(i===0){
        let root = new Node(nums[i])
    }else{
        if(node.data < nums[i]){
            node.left = new Node(nums[i])
            node = node.left
        }else{
            node.right = new Node(nums[i])
            node= node.right
        }  
    }

    i++

}

//building in level order fashion
function buildTree(nums){
    if(nums.length===0){
        return
    }
    let root = new Node(nums[0])
    let q = [root]
    let i=1
    while(i<nums.length){
        let curr = q.shift()
        if (i < nums.length){
            curr.left = new Node(nums[i++])
            q.push(curr.left)
        }
        if (i < nums.length){
            curr.right = new Node(nums[i++])
            q.push(curr.right)
        }
        
    }
    return root
}

//Root Left Right
function preOrderPrint(node){
    if(!node){
        return 
    }
    console.log(node.data)
    preOrderPrint(node.left)
    preOrderPrint(node.right)  
}
let ans = []
function inOrderPrint(node){
    if(!node){
        return 
    }
    inOrderPrint(node.left)
    ans.push(node.data)
    inOrderPrint(node.right)
}

function postOrder(node){
    if(!node){
        return 
    }
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.data)
}

function levelOrderPrint(node){
    let q = [node]
    console.log(node.data)
    while(q.length>0){
        let curr = q.shift()
        if(curr.left){
            console.log(curr.left.data)
            q.push(curr.left)
        }
        if(curr.right){
            console.log(curr.right.data)
            q.push(curr.right)
        }
    }
    }

function iterativePreOrder(root){
    let q=[root]
    while(q.length>0){
        let curr = q.pop()
        console.log(curr.data)
        if(curr.right){
            q.push(curr.right)
        }
        if(curr.left){
            q.push(curr.left)
        }
    }
}

function iterativeInorder(root){
    let curr= root
    let q = []
    q.push(curr)
    while(true){
        if(curr.left){
            q.push(curr.left)
            curr=curr.left
        }else{
            if(q.length===0){
                break
            }
            curr = q.pop()
            console.log(curr.data)
            if(curr.right){
                q.push(curr.right)
                curr = curr.right
            }
            
        }
    }
}

function iterativePostOrder(){
    let 
}

let root = buildTree([1,null,2,3])
inOrderPrint(root)
console.log(ans)
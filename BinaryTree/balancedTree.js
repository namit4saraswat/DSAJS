class Node {
    constructor(data, left, right){
        this.data = data
        this.left = left
        this.right = right
        
    }
}

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


function isBalancedUtil(node){
    if(!node){
        return 0
    }
    let l = isBalancedUtil(node.left)
    if(l===-1){
        return -1
    }
    let r = isBalancedUtil(node.right)
    if(r===-1){
        return -1
    }
    if(Math.abs(l-r)>1){
        return -1
    }
    return  Math.max(l,r) + 1
}

function isBalanced(node){
    console.log(isBalancedUtil(node))
}

let root = buildTree([3,9,20,null,null,15,7])
console.log(isBalanced(root))
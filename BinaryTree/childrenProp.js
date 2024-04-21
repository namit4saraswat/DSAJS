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


let sum=0
function childrenSum(node){
    if(!node || (!node.left && !node.right)){
        return true 
    }

    let l=0
    let r=0
    if(node.left){
        l=node.left.data
    }
    if(node.right){
        r=node.right.data
    }
    if(node.data=== r + l && childrenSum(node.left) && childrenSum(node.right)){
        return true
    }else{
        return false
    }
    
}

let p = buildTree([10,8,2,3,2,2])
console.log(childrenSum(p))
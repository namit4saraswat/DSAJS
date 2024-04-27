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
let set = new Set()
function widthHelper(node, min){
    if(!node){
        return
    }
    
    set.add(min)
    widthHelper(node.left, min-1)
    widthHelper(node.right, min+1)
    
}

function width(root){
    widthHelper(root,0)
    return (set.size)
}

let root = buildTree([1,2,3,4,5,6,7,8])
console.log(width(root))
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
function checkTree(root){
    if(!root || (!root.left && !root.right)){
        return  true
    }

    let l=0
    let r=0
    if(root.left){
        l=root.left.data
    }
    if(root.right){
        r=root.right.data
    }
    if(root.data=== r + l && checkTree(root.left) && checkTree(root.right)){
        return true
    }else{
        return false
    }
    
}

let p = buildTree([10,4,6])
console.log(checkTree(p))
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


var isSameTree = function(p, q) {
    if (!p || !q){
        return p===q
    }
    
    return p.data ===q.data && isSameTree(p.left,q.left) && isSameTree(p.right,q.right) 
    

};

function isSubtree(root,subroot){
    if(!root){
        return false
    }
    if(!subroot){
        return true
    }

    if(isSameTree(root,subroot)){
        return  true
    }

    return  isSubtree(root.left,subroot) || isSubtree(root.right,subroot)
}

let root = buildTree([3,4,5,1,2])
let subroot = buildTree([4,1,2,1])
console.log(isSubtree(root,subroot))



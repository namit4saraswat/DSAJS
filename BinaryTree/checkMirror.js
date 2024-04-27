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
    
    return p.data ===q.data && isSameTree(p.left,q.right) && isSameTree(p.right,q.left) 
    

};

function isSymmetric(root){
    if(!root){
        return true
    }
    if(isSameTree(root.left,root.right)){
        return  true
    }
    return false
}



let root = buildTree([1,2,2,4,5,4,5])
console.log(isSymmetric(root))
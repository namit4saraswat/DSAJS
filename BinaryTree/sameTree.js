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
var flag=true

var isSameTree = function(p, q) {
    if (!p || !q){
        return p===q
    }
    
    return p.val ===q.val && isSameTree(p.left,q.left) && isSameTree(p.right,q.right) 
    

};

let p = buildTree([1,2,3])
let q= buildTree([1,2,3])
console.log(isSameTree(p,q))
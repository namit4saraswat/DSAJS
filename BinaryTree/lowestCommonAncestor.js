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


let st1=[]
let st2=[]
function lowestCommonAncestorUtil(node,p,stk) {
    if(!node){
        return
    }
    if(node.val ===p){
        return true
    }
    if(lowestCommonAncestorUtil(node.left,p,stk) || lowestCommonAncestorUtil(node.right,p,stk)){
        stk.push(node.val)
        return true
    }
    
}

var lowestCommonAncestor = function(root,p,q){
    if(!root || root.data === p || root.data === q){
        return root
    }

    let l=lowestCommonAncestor(root.left,p,q)
    let r=lowestCommonAncestor(root.right,p,q)

    if(l===undefined){
        return r
    } 
    if(r === undefined){
        return l
    }
    return root
}

let root = buildTree([1,2,3,4,5,6,7,8])
console.log(lowestCommonAncestor(root,3,8))

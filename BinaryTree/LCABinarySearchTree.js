class Node {
    constructor(val, left, right){
        this.val = val
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

function LCA(root,p,q){
    while(root){
        if(p<root.val && q<root.val){
            root=root.left
        }else if(p>root.val && q>root.val){
            root=root.right
        } else{
            return root.val
        }
    }
}

let root = buildTree([6,2,8,0,4,7,9,null,null,3,5])
console.log(LCA(root,2,4))

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
    function height(node,ans){
        if(!node){
            return 0
        }

        let l=height(node.left,ans)
        let r=height(node.right,ans)

        ans[0] = Math.max(ans[0],l+r)

        return 1 + Math.max(l,r)
    }
    function diameterOfBinaryTree(node){
        if(!node){
            return 0
        }
        ans=[0]
        height(node,ans)
        
        return ans[0]
    }

let root = buildTree([1,2,3,4,5])
console.log(diameterOfBinaryTree(root))

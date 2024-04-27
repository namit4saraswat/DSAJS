/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

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

var levelOrder = function(root) {
    if(!root){
        return
    }
    let ans=[[]]
    let data=[]
    let queue=[]
    let count=-1
    queue.push(root)
    while(queue.length>0){
        let size=queue.length
        count++
        while(size>0)
        {
            let node = queue.shift()
            data.push(node.data)
            if(node.left!=null){
                queue.push(node.left)
            }
            if(node.right!=null){
                queue.push(node.right)
            }
            
            size--
        }
        if(count%2===0){
            ans[count]=data
        }else{
            ans[count]=data.reverse()
        }
        
        data=[]
    }
    return ans
};

let root = buildTree([3,9,20,null,null,15,7])
console.log(levelOrder(root))
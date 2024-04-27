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

function invertTree(node){
    if(!node || !(node.left || node.right)){
        return null
    }

    let temp = node.right
    node.right=node.left
    node.left=temp

    invertTree(node.left)
    invertTree(node.right)
    return root
}

let root = buildTree([1,2,3,4,5,6,7,8,9])
console.log(invertTree(root))
console.log('')
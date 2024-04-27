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
    let q=[]
    q.push(root)
    for(let i=0;i<nums.length;i++){
            let node = q.shift()
            node.left = new Node(nums[2*i+1])
            q.push(node.left)
            node.right = new Node(nums[2*i+2])
            q.push(node.right)
            
    }
    return root
}

function height(node){
    if(!node){
        return 0
    }
    let l = height(node.left)
    let r = height(node.right)
    
    return 1+ Math.max(l,r)
}

function isBalanced(node){
    if(!node){
        return true
    }
    
    let l=height(node.left)
    let r=height(node.right)

    

    return l-r<=1 && isBalanced(node.left) && isBalanced(node.right)
}


let root = buildTree([1,null,2,null,3])
console.log(isBalanced(root))
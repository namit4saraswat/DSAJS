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

function findHeight(node){
    if(!node){
        return 0
    }
    let l = findHeight(node.left)
    let r = findHeight(node.right)
    
    return 1+ Math.max(l,r)

}


function findHeight1(node,ans,tmp){
    if(!node){      
        ans[0]=Math.max(ans[0],tmp[0])
        return
    }
    tmp[0]++
    let l = findHeight1(node.left,ans,tmp)
    tmp[0]--
    let r = findHeight1(node.right,ans,tmp)
    
    return ans
}



let root = buildTree([1, 2, 3, 4, 5, 6,7,8,9,10, 3, 4, 5, 6,7,8,9,10])
console.log(findHeight1(root,[0],[0]))
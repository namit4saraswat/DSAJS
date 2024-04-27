class Node {
    constructor(data, left, right,next){
        this.data = data
        this.left = left
        this.right = right
        this.next = next
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

var connect = function(root) {
    if(!root){
        return
    }

    let q = []
    q.push(root)
    let ans=[]
    let data = []
    let counter=0
    while(q.length>0){
        let size=q.length
        while(size>0){
            let node = q.shift()
            data.push(node)
            if(node.left){
                q.push(node.left)
            }
            if(node.right){
                q.push(node.right)
            }
            if(data.length>1){
                data[counter].next=data[counter+1]
                counter++
            }
            size--
        }

        ans.push(data)
        data=[]
        counter=0
    }
    return ans
};

let root = buildTree([1,2,3,4,5,6,7,8])
console.log(connect(root))
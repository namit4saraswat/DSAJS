class Node {
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    createLLFromArr(nums){
        let curr
        this.head = new Node(nums[0])
        curr = this.head
        for(let i=1;i<nums.length;i++){
            curr.next = new Node(nums[i])
            curr = curr.next
        }

        return this.head
    }
}

function getRootNode(nums){
    let ll = new LinkedList()
    return ll.createLLFromArr(nums)
}

function printList(root){
    let nums = []
    let curr = root
    while(curr){
        nums.push(curr.data)
        curr = curr.next
    }
    return nums
}

module.exports = {getRootNode,printList};
 



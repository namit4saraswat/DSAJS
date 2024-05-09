class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.head2 = null
        this.head = null;
        this.size = 0;
    }

    createLinkedList(nums){
        for(let i=nums.length-1;i>=0;i--){
            this.head = new Node(nums[i], this.head)
        }
        // console.log()
    }
    

    findMid(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next
        }
        console.log(slow.data)
    }

    nthNodeFromEnd(n){
        let slow = this.head
        let fast = this.head
        let count=0
        while(fast && fast.next){
            count++
            fast = fast.next.next
            slow = slow.next
            
        }
        let i=0
        if(count>n){
            while(count-n-i>1){
                i++
                slow=slow.next
            }
        }else{
            slow=this.head
            count=2*count-n
            while(count>1){
                count--
                slow = slow.next
            }
        }
        

        slow.next=slow.next.next
        return this.head
    }

}

let ll = new LinkedList()
ll.createLinkedList([1])
ll.nthNodeFromEnd(1)
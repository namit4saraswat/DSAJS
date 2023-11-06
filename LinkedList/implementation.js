/**
 * @param {} 
 * @return {} Do not return anything, modify board in-place instead.
 */


//10 --> 16 --> 20
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //Insert First Node
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++;
    }

    //Insert last node
    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //Insert at index
    insertAtIndex(data, index){
        let node = new Node(data, );
        let current = this.head;
        while(index>0){
            index--;
            current = current.next;
        }
        let temp = current.next;
        node.next = temp;
        current.next = node;
        this.size++;
    }

    reverseList = function() {
        let current = this.head;
        let prev = current;
        let revCurr = current.next;
        current = current.next.next;
        prev.next = null;
        while(current){
            revCurr.next = prev;
            prev = revCurr;
            revCurr = current;
            current = current.next;
        }
        revCurr.next = prev;
    };

    getLength(){
        let current = this.head;
        let count = 0;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    deleteMiddleNode(){
        /*
        let map = new Map();
        let current = this.head;
        let count = 0;
        while(current){
            map.set(count, current);
            count++;
            current = current.next;
        }
        let middle =  Math.floor(count/2);
        map.get(middle-1).next = map.get(middle+1);
        */

        //Approach 2
        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while(fast && fast.next){
            prev = slow;
            fast = fast.next.next;
            slow = slow.next;
        }
        if(prev){
        prev.next = slow.next;
        }else{
            head = slow.next;
        }
    }

    //get at index
    
    //remove at index

    //clear list

    //print list
    printListData(){
        let current = this.head;
        console.log('**************')
        while(current){
            console.log(current.data);
            current = current.next;
        }
        console.log('size: ' + this.size)
        console.log('**************')
        console.log(this.head);
    }

}

const ll = new LinkedList();
ll.insertFirst(500);
// ll.insertFirst(400)
// ll.insertFirst(300)
// ll.insertFirst(200)
// ll.insertFirst(100)
ll.printListData();
ll.deleteMiddleNode();
ll.printListData();
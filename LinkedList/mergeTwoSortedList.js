/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head1 = null;
        this.head2 = null;
        this.size = 0;
    }

    insertFirst1(data){
        this.head1 = new Node(data, this.head1)
        this.size++;
    }

    insertFirst2(data){
        this.head2 = new Node(data, this.head2)
        this.size++;
    }

    printListData(head){
        let current = head;
        console.log('**************')
        while(current){
            console.log(current.data);
            current = current.next;
        }
        console.log('**************')
        
    }
}
var mergeTwoLists = function(list1, list2) {
    let list1 = this.head1;
    let list2 = this.head2;
    let list = null;
    if(list1.data <= list2.data){
        list = new Node(list1.data, this.head)
        this.head = list
        list1 = list1.next;
    }else{
        list = new Node(list2.data, this.head)
        this.head = list
        list2 = list2.next
    }
    while(list1 && list2){
        if(list1.data < list2.data){
            list.next = new Node(list1.data, this.head)
            list = list.next
            list1 = list1.next
        }else{
            list.next = new Node(list2.data, this.head)
            list = list.next
            list2 = list2.next
        }
    }

    if(!list1){
        list.next = list2
    }else{
        list.next = list1
    }
};

const ll = new LinkedList();
ll.insertFirst1(4)
ll.insertFirst1(2)
ll.insertFirst1(1)
ll.printListData(this.head1)
ll.insertFirst2(4)
ll.insertFirst2(3)
ll.insertFirst2(1)
ll.printListData(this.head2)
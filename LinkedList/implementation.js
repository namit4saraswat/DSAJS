/**
 * @param {} 
 * @return {} Do not return anything, modify board in-place instead.
 */

const { default: Link } = require("next/link");

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
    }

}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertFirst(500)
ll.insertFirst(600)
ll.insertLast(400)
ll.printListData();
ll.insertAtIndex(350,6)
ll.printListData();
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
        this.head1 = null;
        this.head2 = null
        this.head = null;
        this.size = 0;
    }

    //Insert First Node
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++;
    }

    insertFirst1(data){
        this.head1 = new Node(data, this.head1)
        this.size++;
    }

    insertFirst2(data){
        this.head2 = new Node(data, this.head2)
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

    insertLast1(data){
        let node = new Node(data);
        let current;
        if(!this.head1){
            this.head1 = node;
        }else{
            current = this.head1;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertLast2(data){
        let node = new Node(data);
        let current;
        if(!this.head2){
            this.head2 = node;
        }else{
            current = this.head2;
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

    reverseList() {
        let prev=null;
        let curr=this.head;
        while(curr !== null){
        const nextNode = curr.next;
        curr.next=prev;
        prev= curr;
        curr=nextNode;
        }
        return prev;
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

    maxTwinSum(){
        let slow = this.head;
        let fast = this.head;
        let prev = null;
        let map = new Map();
        let max = Number.NEGATIVE_INFINITY
        let count = -1;
        let temp = null;

        while(fast && fast.next){
            fast = fast.next.next
            temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
        }

        while(prev.next){
            prev = prev.next;
            max = Math.max(max,prev.data + map.get(count));
            count--;
        }

        console.log(max);
    }

    oddEvenPair(){
        if(this.head == null){
            console.log('asjhjk')
            return
        }
        let odd = this.head;
        let even = this.head.next;
        let temp = even;

        while(odd.next && even.next){
            odd.next = odd.next.next;
            even.next = even.next.next;
            odd = odd.next;
            even = even.next;
        }

        odd.next = temp;
    }

    mergeTwoList(){
        let list1 = this.head1;
        let list2 = this.head2;
        if(!list1){
            return list2
        }
        if(!list2){
            return list1
        }
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

    }

    addTwoNumbers(){
        let list1 = this.head1;
        let list2 = this.head2;
        let num1 = 0;
        let count = 1;
        let num2 = 0;
        while(list1){
            num1 = BigInt('' + list1.data * (count) + num1)
            count = count * 10
            list1 = list1.next;
        }
        count =1;
        while(list2){
            num2 = BigInt('' + list2.data * (count) + num2)
            count = count * 10
            list2 = list2.next;
        }
        let sum = num1 + num2;
        sum = sum.toString();
        let len = sum.length;
        let i=0;
        while(len>0){
            this.head = new Node(parseInt(sum[i]), this.head)
            len--;
            i++;
        }
        
    }


    removeNthFromEnd(n){
        let current = this.head;
        let prev = null
        let len = 0;
        while(current){
            len++;
            prev = current
            current = current.next;
        }
        if(n === 0){
            prev.next = null;
            return
        }
        let current2 = this.head;
        while(len-n>0){
            prev = current2;
            current2 = current2.next;
            len--
            if(len-n=== 0){
                prev.next = current2.next;
                return
            }
        }

        this.head = current2.next;
    }

    reverse2(left, right){
        let current = this.head
        let i=1;
        let leftNode = null;
        let leftEdge = null
        while(current){
            if(i === left -1){
                leftEdge = current
            }
            leftNode = current
            let prev = current;
            current = current.next;
            if(i===left){
                while(i != right){
                    const nextNode = current.next;
                    current.next=prev;
                    prev= current;
                    current=nextNode;
                    i++
                }
                leftNode.next = current
                if(left === 1){
                    this.head = prev
                    return
                }
                leftEdge.next = prev
                return
            }
            i++;
        }
        
    }

    removeDup(){
        let current = this.head
        let prev= current
        let node = new Node(current.data, null)
        this.head= node
        current = current.next
        while(current){
            let dup = prev.data;
            if(dup!= current.data){
                node.next = new Node(current.data, null)
                node = node.next
            }
            prev = current
            current = current.next
        }
    }

    rotateList(k){
        if(!this.head){
            return
        }
        let current = this.head
        let len = 0 
        let last = null
        while(current){
            len++
            last = current
            current = current.next
        }
        k = k%len
        current = this.head
        while(len -k - 1 > 0){
            current = current.next
            k++
        }
        last.next = this.head
        this.head = current.next
        current.next = null
    }
    //get at index
    
    //remove at index

    //clear list

    //print list

    partition(x){
        let current = this.head
        let less= null
        let more = null
        let moreHead = null
        let lessHead = null
        while(current){
            if(current.data<x){
                if(!less){
                    less = new Node(current.data, null)
                    lessHead = less
                    current = current.next
                    continue
                }
                less.next = current
                less = less.next
            }else{
                if(!more){
                    more = new Node(current.data, null)
                    moreHead = more
                    current = current.next
                    continue
                }
                more.next = current
                more = more.next
            }
            current = current.next
        }
        if(more){more.next = null}
        if(less){less.next = moreHead}else{
            lessHead = moreHead
        }
        this.head = lessHead
    }

    isPalindrome() {
        let current = this.head
        let arr = [];
        while(current){
            arr.push(current.data)
            current = current.next
        }
        let i=0;
        let l = arr.length
        let recurPalind = function(arr, s, e){
            if(s>=e){
                return true
            }
            if(arr[s]!=arr[e] ){
                return false
            }
            return recurPalind(arr,s+1, e-1)
        }
        return recurPalind(arr,i, l-1)
        
    };

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
ll.insertLast(1)
ll.insertLast(2)
// ll.insertLast(3)
// ll.insertLast(1)
// ll.insertLast(3)
// ll.insertLast(1)
// ll.insertLast(5)
// ll.insertLast(6)
// ll.printListData()
console.log(ll.isPalindrome());
// ll.printListData()
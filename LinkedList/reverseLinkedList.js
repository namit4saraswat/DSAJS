/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null || head.next == null){
        return head
    }
    if(head.next.next == null){
        let revCurr = head.next;
        revCurr.next = head;
        head.next = null
        return revCurr
    }
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
        revCurr.next = prev;
    }
    return revCurr
};

console.log(reverseList())
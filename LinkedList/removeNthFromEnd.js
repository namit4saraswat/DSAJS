/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = head;
    let prev = null
    let len = 0;
    while(current){
        len++;
        prev = current
        current = current.next;
    }
    if(n === 0){
        prev.next = null;
        return head
    }
    let current2 = head;
    while(len-n>0){
        prev = current2;
        current2 = current2.next;
        len--
        if(len-n=== 0){
            prev.next = current2.next;
            return head
        }
    }

    head = current2.next;
    return head
};
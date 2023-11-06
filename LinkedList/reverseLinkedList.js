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
    current = head;
    while(current.next){
        prev = current;
        current = curren.next;
        revCurr = current;
        revCurr.next = prev;
    }
};

console.log(reverseList())
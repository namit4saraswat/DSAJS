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
    let slow = head
    let fast = head
    let prev
    let i=0
    while(fast.next && fast && i<n){
        prev = slow
        fast = fast.next
        slow = slow.next
        i++
    }

    if(i===n+1){
        prev.next=slow
        return head
    }

    while(i-n > 0){
        prev = slow
        slow = slow.next
        i--
    }

    //// to be fixed
};
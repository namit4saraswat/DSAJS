/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let current = head
    let len = 0 
    let last = null
    while(current){
        len++
        last = current
        current = current.next
    }
    k = k%len
    current = head
    while(len -k - 1 > 0){
        current = current.next
        k++
    }
    last.next = head
    head = current.next
    current.next = null

    return head
};
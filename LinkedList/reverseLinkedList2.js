/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let current = head
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
                return prev
            }
            leftEdge.next = prev
            return head
        }
        i++;
    }
};
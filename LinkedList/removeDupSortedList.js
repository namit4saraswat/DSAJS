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
var deleteDuplicates = function(head) {
    
    let current = head
    let prev= current
    set.add(current.val)
    current = current.next
    while(current){
        if(set.has(current.val)){
            prev.next = current.next;
        }
        set.add(current.val)
        prev = current
        current = current.next
    }
};
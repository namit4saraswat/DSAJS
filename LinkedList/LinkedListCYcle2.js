/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head || !head.next){
        return null
    }
    let set = new Set()
    let current = head
    while(current){
        if(set.has(current.next)){
            return current.next
        }else{
            set.add(current)
        }
        current=current.next
    }

    return null
};
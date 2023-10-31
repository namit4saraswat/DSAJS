/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let set = new Set();
    current = head;
    while(current){
        if(set.has(current.next)){
            return true;
        }
        set.add(current.next)
        current = current.next
    }

    return false;
};

console.log()
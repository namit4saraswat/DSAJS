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

var deleteMiddle = function(head) {
    let map = new Map();
    let current = head;
    let count = 0;
    while(current){
        map.set(count, current);
        count++;
        current = current.next;
    }
    let middle =  Math.floor(count/2);
    map.get(middle-1).next = map.get(middle+1);
    return head;
};

console.log(deleteMiddle())
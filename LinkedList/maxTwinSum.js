/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head;
    let prev = null;
    let map = new Map();
    let max = Number.NEGATIVE_INFINITY
    let count = -1;

    while(fast && fast.next){
        prev = slow;
        count++;
        map.set(count,prev.val)
        fast = fast.next.next;
        slow = slow.next;
    }

    while(prev.next){
        prev = prev.next;
        max = Math.max(max,prev.val + map.get(count));
        count--;
    }

    return max;
};
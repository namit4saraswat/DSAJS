/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let current = head
    let less= null
    let more = null
    let moreHead = null
    let lessHead = null
    while(current){
        if(current.val<x){
            if(!less){
                less = new ListNode(current.val, null)
                lessHead = less
                current = current.next
                continue
            }
            less.next = current
            less = less.next
        }else{
            if(!more){
                more = new ListNode(current.val, null)
                moreHead = more
                current = current.next
                continue
            }
            more.next = current
            more = more.next
        }
        current = current.next
    }
    more.next = null
    less.next = moreHead
    return lessHead
};
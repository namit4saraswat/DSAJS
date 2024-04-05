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
var deleteDuplicates = function (head) {
    let dummy = new ListNode(0)
    dummy.next = head
    let head2 = dummy
    let flag=false
    while(dummy && dummy.next){
        if(dummy.next.val ===dummy.next.next.val){
            dummy.next =dummy.next.next
            flag=true
        }else{
            if(flag){
                dummy.next = dummy.next.next
            }else{
                dummy=dummy.next
            }
            
        }
    }

    return head2.next
}
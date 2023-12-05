/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    let current = head
    if(current === null || current.next === null){
        return
    }
    if(current.val < current.next.val){
        current = current.next.next
    }else{
        current = current.next
    }
};
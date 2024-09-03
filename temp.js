const  {getRootNode, printList} =  require ("./LinkedList/createLLFromArr")

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow=head
    let fast=head
    while(fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast){
            return true
        }
    }

    return false
};

const root = getRootNode([1,2,3,4,5,6,7,8,9,10])

console.log(hasCycle(root))


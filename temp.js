const  {getRootNode, printList} =  require ("./LinkedList/createLLFromArr")
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head
    let ahead = head
    while(curr){
        ahead = ahead.next
        curr.next = prev
        prev = curr
        curr = ahead
    }
    return prev
};


const root = getRootNode([1,2,3,4,5,6,7,8,9,10])
let head = reverseList(root)
console.log(printList(head))
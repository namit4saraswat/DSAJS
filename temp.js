const  {getRootNode, printList} =  require ("./LinkedList/createLLFromArr")

var reverseBetween = function(head, left, right) {
    if(head == null || head.next == null){
        return head
    }
    let prev = null
    let curr= head
    let ahead = head
    let count = 1
    last = curr
    first = ahead
    while(curr && count <= right){
        if(count >=left){
            ahead = ahead.next
            curr.next = prev
            prev = curr
            curr = ahead
        }else{
            last = curr
            prev = curr
            curr = curr.next
            ahead = ahead.next
            first = ahead
        }
        count++
        
    }
    last.next = prev
    first.next = curr
    return left===1 ? prev : head
};

const root = getRootNode([5,6])
let head = reverseBetween(root,1,2)
console.log(printList(head))
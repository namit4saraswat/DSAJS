const  {getRootNode, printList} =  require ("./LinkedList/createLLFromArr")



var swapPairs = function(head) {
    let one = head
    let two = head.next
    let newHead = head.next
    let prevPair = null
    while(two){
        let three = two.next
        two.next = one
        one.next = three
        prevPair = one
        two = three.next
        one = three
        prevPair.next = two
    }
    return newHead
};

const root = getRootNode([1,3,5,7,9])
let head = swapPairs(root)
console.log(printList(head))
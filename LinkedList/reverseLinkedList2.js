
const  {getRootNode, printList} =  require ("./createLLFromArr")



function reverseLinkedList(head){
    let node = null
    while(head){
        const tmp = head.next
        head.next = node
        node = head
        head = tmp
    }

    return node
}

const root = getRootNode([1,2])
let head = reverseLinkedList(root)
console.log(printList(head))



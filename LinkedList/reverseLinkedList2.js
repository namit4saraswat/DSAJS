
const  {getRootNode, printList} =  require ("./createLLFromArr")



function reverseLinkedList(root){
    if(!root.next){
        return root
    }
    let curr = root.next
    let curr2 = curr.next
    if(!curr2){
        curr.next = root
        root.next = null
        return curr
    }
    root.next = null
    while(curr2){
        curr.next = root
        root = curr
        curr = curr2
        if(!curr2.next){
            curr.next = root
            return curr
        }
        curr2 = curr2.next
        
    }
}

const root = getRootNode([1,2])
let head = reverseLinkedList(root)
console.log(printList(head))



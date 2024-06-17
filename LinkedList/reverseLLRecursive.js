function reverseLinkedList(head) {
    if (head === null || head.next === null) {
      return head;
    }
  
    // Recursively reverse the rest of the list
    let newHead = reverseLinkedList(head.next);
  
    // Adjust the pointers
    let front = head.next
    front.next = head
    head.next = null
    
    // Return the new head of the reversed list
    return newHead;
  }
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let current = head
    let arr = [];
     while(current){
        arr.push(current.data)
        current = current.next
    }
    let i=0;
    let l = arr.length
    let recurPalind = function(arr, s, e){
        if(s>=e){
            return true
        }
        if(arr[s]!=arr[e] ){
            return false
        }
        return recurPalind(arr,s+1, e-1)
    }
    return recurPalind(arr,i, l-1)

    
    
};

console.log(isPalindrome())
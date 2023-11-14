/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = 0;
    let count = 1;
    let num2 = 0;
    while(l1){
        num1 = l1.val * (count) + num1
        count = count * 10
        l1 = l1.next;
    }
    count =1;
    while(l2){
        num2 = l2.val * (count) + num2
        count = count * 10
        l2 = l2.next;
    }
    let sum = num1 + num2;
    sum = sum.toString();
    let len = sum.length;
    let i=0;
    let head = null;
    while(len>0){
        head = new Node(parseInt(sum[i]), head)
        len--;
        i++;
    }
    return head
};
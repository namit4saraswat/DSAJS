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
var addTwoNumbers = function (l1, l2) {
    let carryOver = 0
    let unitSum = 0
    let head3 = new ListNode()
    let head = head3
    head = head3
    while (l1 || l2) {
        if (l1) unitSum = l1.data + carryOver
        if (l2) unitSum = unitSum + l2.data
        if (unitSum > 9) {
            unitSum = unitSum - 10
            carryOver = 1
        } else {
            carryOver = 0
        }
        head3.next = new ListNode(unitSum)
        head3 = head3.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (carryOver === 1) {
        head3.next = new Node(carryOver)
    }
    head = head.next
    return head
};
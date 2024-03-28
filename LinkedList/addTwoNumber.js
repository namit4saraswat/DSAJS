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
    let dummy = new ListNode()
    let res = dummy
    while (l1 || l2 || carryOver) {
        unitSum = carryOver
        if (l1) {
            unitSum = l1.val + unitSum
            l1 = l1.next
        }
        if (l2) {
            unitSum = unitSum + l2.val
            l2 = l2.next
        }
        let num = unitSum % 10
        carryOver = Math.floor(unitSum / 10)

        dummy.next = new ListNode(num)
        dummy = dummy.next
    }
    return res.next
};
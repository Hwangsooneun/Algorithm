/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// runtime 120ms, top 83.65%
 var addTwoNumbers = function(l1, l2) {
  let answer = new ListNode()
  let clone = answer
  let ceil = 0
  while (l1 || l2) {
      let num1 = l1 !== null ? l1.val : 0;
      let num2 = l2 !== null ? l2.val : 0;
      l1 = l1 !== null ? l1.next : null
      l2 = l2 !== null ? l2.next : null
      let sum = num1 + num2 + ceil
      clone.next = new ListNode(sum % 10);
      ceil = Math.trunc(sum / 10);
      clone = clone.next
  }
  if (ceil === 1) {
      clone.next = new ListNode(ceil)
      clone = clone.next
  }
  return answer.next
};
/*
이지
*/
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
// runtime 68ms
 var mergeTwoLists = function(l1, l2) {
  let answer = new ListNode(0)
  let curNode = answer
  while (l1 || l2) {
      if (l1 && l2) {
          if (l1.val >= l2.val) {
              curNode.next = new ListNode(l2.val)
              l2 = l2.next
          } else {
              curNode.next = new ListNode(l1.val)
              l1 = l1.next
          }
      } else if (l2) {
          curNode.next = new ListNode(l2.val)
          l2 = l2.next
      } else {
          curNode.next = new ListNode(l1.val)
          l1 = l1.next
      }
      curNode = curNode.next
  }
  return answer.next
};
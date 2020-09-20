/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let currentNode = head,
    len = 0,
    counter = 0;
  while (currentNode != null) {
    len++;
    currentNode = currentNode.next;
  }
  currentNode = head;
  let middle = Math.floor(len / 2);
  while (counter != middle) {
    counter++;
    currentNode = currentNode.next;
  }
  return currentNode;
};

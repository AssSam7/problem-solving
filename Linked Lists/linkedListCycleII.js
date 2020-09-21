/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let currentNode = head,
    nodes = new Set();
  while (currentNode) {
    if (nodes.has(currentNode)) {
      return currentNode;
    }
    nodes.add(currentNode);
    currentNode = currentNode.next;
  }

  return null;
};

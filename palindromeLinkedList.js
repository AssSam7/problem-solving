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
var isPalindrome = function (head) {
  let currentNode = head;
  let list = [],
    listRev = [];
  while (currentNode != null) {
    list.push(currentNode.val);
    currentNode = currentNode.next;
  }
  listRev = list.reverse();
  console.log(list, listRev);
  return listRev.join("") == listRev.reverse().join("");
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// Get lengths of lists
let getCount = (node) => {
  let len = 0,
    current = node;
  while (current) {
    len++;
    current = current.next;
  }
  return len;
};

var getIntersectionNode = function (headA, headB) {
  const c1 = getCount(headA);
  const c2 = getCount(headB);

  let current1 = headA,
    current2 = headB;

  // Forward the lengthier list
  if (c1 > c2) {
    for (let i = 0; i < c1 - c2; i++) {
      current1 = current1.next;
    }
  } else {
    for (let i = 0; i < c2 - c1; i++) {
      current2 = current2.next;
    }
  }

  // Get the intersection point
  while (current1 && current2) {
    if (current1 == current2) {
      return current1;
    }
    current1 = current1.next;
    current2 = current2.next;
  }

  return null;
};

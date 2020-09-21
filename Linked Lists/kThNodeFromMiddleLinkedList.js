// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let currentNode = A,
      len = 0;
    while (currentNode) {
      len++;
      currentNode = currentNode.next;
    }
    currentNode = A;
    if (B > Math.floor(len / 2)) {
      return -1;
    }
    for (let i = 0; i < Math.floor(len / 2) - B; i++) {
      currentNode = currentNode.next;
    }
    return currentNode ? currentNode.data : -1;
  },
};

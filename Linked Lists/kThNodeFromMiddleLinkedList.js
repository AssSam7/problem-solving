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
    let currentNode = A;
    let list = [],
      middle = 0,
      elem = 0;
    while (currentNode != null) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
    }
    middle = Math.floor(list.length / 2);

    return middle - B >= 0 ? list[middle - B] : -1;
  },
};

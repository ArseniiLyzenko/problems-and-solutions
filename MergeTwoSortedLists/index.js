/*
Merge two sorted linked lists and return it as a new list. The new list
should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

function mergeTwoSortedLists(list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  let list = null;
  let cur = null;

  if (list1.val < list2.val) {
    list = list1;
    cur = list1;
    list1 = list1.next;
  } else {
    list = list2;
    cur = list2;
    list2 = list2.next;
  }

  while (list1 || list2) {
    if (((list1) ? list1.val : Infinity) < ((list2) ? list2.val : Infinity)) {
      cur.next = list1;
      cur = cur.next;
      list1 = list1.next;
    } else {
      cur.next = list2;
      cur = cur.next;
      list2 = list2.next;
    }
  }

  return list;
}

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

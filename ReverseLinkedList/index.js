/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively.
Could you implement both?
*/

function reverseLinkedList_iter(linkedList) {
  let prev = null;
  let next;

  while (linkedList) {
    next = linkedList.next;
    linkedList.next = prev;
    prev = linkedList;
    linkedList = next;
  }

  return prev;
}

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function reverseLinkedList_rec(linkedList, prevNode = null) {
  if (!linkedList) return null;

  //handling last node
  if (!linkedList.next) {
    linkedList.next = prevNode;
    return linkedList;
  }

  let reversed = reverseLinkedList_rec(linkedList.next, linkedList);

  linkedList.next = prevNode;

  return reversed;
}
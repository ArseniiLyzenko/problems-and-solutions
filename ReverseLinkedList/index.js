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
  if (!linkedList) return null;

  linkedList = listToArray(linkedList);
  linkedList = linkedList.reverse();
  linkedList = arrayToList(linkedList);

  return linkedList;
}

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function listToArray(list) {
  let arr = [];
  let current = list;
  while (current.next) {
    arr.push(current.val);
    current = current.next;
  }
  arr.push(current.val);

  return arr;
}

function arrayToList(arr) {
  let list;
  let nextRest;
  for (let i = arr.length - 1; i >= 0; --i) {
    nextRest = list || null;
    list = new ListNode(arr[i], nextRest);
  }

  return list;
}

describe("reverseLinkedList_iter()", function() {
  it("1->2->3->4->5->NULL → 5->4->3->2->1->NULL", function() {
    assert.deepEqual(reverseLinkedList_iter(
      new ListNode(1,
        new ListNode(2,
          new ListNode(3,
            new ListNode(4,
              new ListNode(5)))))),
      new ListNode(5,
        new ListNode(4,
          new ListNode(3,
            new ListNode(2,
              new ListNode(1))))));
  });

  it("1->NULL → 1->NULL", function() {
    assert.deepEqual(reverseLinkedList_iter(
      new ListNode(1)),
      new ListNode(1));
  });

  it("1->1->1->2->NULL → 2->1->1->1->NULL", function() {
    assert.deepEqual(reverseLinkedList_iter(
      new ListNode(1,
        new ListNode(1,
          new ListNode(1,
            new ListNode(2))))),
      new ListNode(2,
        new ListNode(1,
          new ListNode(1,
            new ListNode(1)))));
  });

  it("NULL → NULL", function() {
    assert.deepEqual(reverseLinkedList_iter(null), null);
  });
});

describe("reverseLinkedList_rec()", function() {
  it("1->2->3->4->5->NULL → 5->4->3->2->1->NULL", function() {
    assert.deepEqual(reverseLinkedList_rec(
      new ListNode(1,
        new ListNode(2,
          new ListNode(3,
            new ListNode(4,
              new ListNode(5)))))),
      new ListNode(5,
        new ListNode(4,
          new ListNode(3,
            new ListNode(2,
              new ListNode(1))))));
  });

  it("1->NULL → 1->NULL", function() {
    assert.deepEqual(reverseLinkedList_rec(
      new ListNode(1)),
      new ListNode(1));
  });

  it("1->1->1->2->NULL → 2->1->1->1->NULL", function() {
    assert.deepEqual(reverseLinkedList_rec(
      new ListNode(1,
        new ListNode(1,
          new ListNode(1,
            new ListNode(2))))),
      new ListNode(2,
        new ListNode(1,
          new ListNode(1,
            new ListNode(1)))));
  });

  it("NULL → NULL", function() {
    assert.deepEqual(reverseLinkedList_rec(null), null);
  });
});

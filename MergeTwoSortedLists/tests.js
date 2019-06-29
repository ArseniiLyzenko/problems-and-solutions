describe("mergeTwoSortedLists()", function() {
  it("1->2->4, 1->3->4 → 1->1->2->3->4->4", function() {
    let input = [
      new ListNode(1,
        new ListNode(2,
          new ListNode(4)
      )
    ),
      new ListNode(1,
        new ListNode(3,
          new ListNode(4)
        )
      )
    ];
    let output = new ListNode(1,
                    new ListNode(1,
                      new ListNode(2,
                        new ListNode(3,
                          new ListNode(4,
                            new ListNode(4)
                          )
                        )
                      )
                    )
                  );

    assert.deepEqual(mergeTwoSortedLists(...input), output);
  });

  it("1->3->5, 2->4->6 → 1->2->3->4->5->6", function() {
    let input = [
      new ListNode(1,
        new ListNode(3,
          new ListNode(5)
        )
      ),
      new ListNode(2,
        new ListNode(4,
          new ListNode(6)
        )
      )
    ];
    let output = new ListNode(1,
                  new ListNode(2,
                    new ListNode(3,
                      new ListNode(4,
                        new ListNode(5,
                          new ListNode(6)
                        )
                      )
                    )
                  )
                );

    assert.deepEqual(mergeTwoSortedLists(...input), output);
  });

  it("1->3->5, 2 → 1->2->3->5", function() {
    let input = [
      new ListNode(1,
        new ListNode(3,
          new ListNode(5)
        )
      ),
      new ListNode(2)
    ];
    let output = new ListNode(1,
                  new ListNode(2,
                    new ListNode(3,
                      new ListNode(5,
                      )
                    )
                  )
                );

    assert.deepEqual(mergeTwoSortedLists(...input), output);
  });

  it("4, 1->3->5 → 1->3->4->5", function() {
    let input = [
      new ListNode(4),
      new ListNode(1,
        new ListNode(3,
          new ListNode(5)
        )
      )
    ];
    let output = new ListNode(1,
                  new ListNode(3,
                    new ListNode(4,
                      new ListNode(5,
                      )
                    )
                  )
                );

    assert.deepEqual(mergeTwoSortedLists(...input), output);
  });
});

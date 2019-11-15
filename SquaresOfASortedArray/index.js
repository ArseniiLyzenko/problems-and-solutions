/*
Given an array of integers A sorted in non-decreasing order, return an array
of the squares of each number, also in sorted non-decreasing order.

Example 1:
  Input: [-4,-1,0,3,10]
  Output:

Example 2:
  Input: [-7,-3,2,3,11]
  Output: [4,9,9,49,121]

Note:
  1 <= A.length <= 10000
  -10000 <= A[i] <= 10000
  A is sorted in non-decreasing order.
*/

function sortedSquares(A) {
  let squares = [];

  let pointer1 = 0;
  let pointer2 = A.length - 1;

  for (let i = 0, l = A.length; i < l; i++) {
    if (Math.abs(A[pointer1]) > Math.abs(A[pointer2])) {
      squares.push(A[pointer1]**2);
      pointer1++;
    } else {
      squares.push(A[pointer2]**2);
      pointer2--;
    }
  }

  return squares.reverse();
}

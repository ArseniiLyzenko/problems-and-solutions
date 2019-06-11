/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some
elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the
returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

function funcName(arr) {
  let lenOfArr = arr.length; // caching
  let missed = [];

  for (let i = 0; i < lenOfArr; i++) {
    let index = Math.abs(arr[i]) - 1; // caching

    if (arr[index] > 0) {
      arr[index] = -arr[index];
    }
  }

  for (let i = 0; i < lenOfArr; i++) {
    if (arr[i] > 0) {
      missed.push(i + 1);
    }
  }

  return missed;
}
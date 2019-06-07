/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 2^31.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function calcHammingDistance(x, y) {
  let hammingDistance = 0;
  let xor = x ^ y;

  while (xor > 0) {
    hammingDistance += xor & 1;
    xor >>= 1;
  }
  
  return hammingDistance;
}

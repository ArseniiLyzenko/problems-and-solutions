/*
Given an array of size n, find the majority element. The majority element is
the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always
exist in the array.

Example 1:

Input: [3,2,3]
Output: 3

Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

function findMajorElement(nums) {
  let specialSet = new SpecialSet();

  for (let num of nums) {
    specialSet.add(num);
  }

  return findKeyWithMaxValue(specialSet);
}

class SpecialSet {

  add(num) {
    if (num in this) {
      this[num]++;
    } else {
      this[num] = 1;
    }
  };

}

function findKeyWithMaxValue(obj) {
  let maxKey = maxVal = -Infinity;

  for (let [key, val] of Object.entries(obj)) {
    if (maxVal < val) {
      maxKey = key;
      maxVal = val;
    }
  }

  return maxKey;
}


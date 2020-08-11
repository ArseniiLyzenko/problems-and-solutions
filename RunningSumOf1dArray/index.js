/*
Given an array nums. We define a running sum of an array as
runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

function runningSum(nums) {
  let runningSum = [];

  for (let i = 0, l = nums.length; i < l; i++) {
    if (i === 0) runningSum[i] = nums[i];
    else         runningSum[i] = nums[i] + runningSum[i - 1];
  }

  return runningSum;
}

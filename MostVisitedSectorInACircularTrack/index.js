/*
Given an integer n and an integer array rounds. We have a circular track which
consists of n sectors labeled from 1 to n. A marathon will be held on this
track, the marathon consists of m rounds. The ith round starts at sector
rounds[i - 1] and ends at sector rounds[i]. For example, round 1 starts at
sector rounds[0] and ends at sector rounds[1]

Return an array of the most visited sectors sorted in ascending order.

Notice that you circulate the track in ascending order of sector numbers in
the counter-clockwise direction (See the first example).


Example 1:
  Input: n = 4, rounds = [1,3,1,2]
  Output: [1,2]
  Explanation: The marathon starts at sector 1. The order of the visited sectors
  is as follows:
  1 --> 2 --> 3 (end of round 1) --> 4 --> 1 (end of round 2) --> 2 (end of
  round 3 and the marathon)
  We can see that both sectors 1 and 2 are visited twice and they are the most
  visited sectors. Sectors 3 and 4 are visited only once.


Example 2:
  Input: n = 2, rounds = [2,1,2,1,2,1,2,1,2]
  Output: [2]


Example 3:
  Input: n = 7, rounds = [1,3,5,7]
  Output: [1,2,3,4,5,6,7]


Constraints:
  2 <= n <= 100
  1 <= m <= 100
  rounds.length == m + 1
  1 <= rounds[i] <= n
  rounds[i] != rounds[i + 1] for 0 <= i < m
*/


/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
function mostVisited(n, rounds) {
  let result = [rounds[0]];

  for (let i = 0, len = rounds.length - 1; i < len; i++) {
    result.push(findRound(n, [rounds[i], rounds[i+1]]))
  }

  result = findMostFrequentElements(result.flat());

  return result.sort((a,b) => {return b - b});
}

/**
 * @param {number} n
 * @param {number[]} bounds
 * @return {number[]}
 * */

function findRound(n, bounds) {
  let result = [];

  for (let i = bounds[0]; true; i++) {
    result.push(i);

    if (i === bounds[1]) break;
    if (i === n) i = 0;

  }

  return result.slice(1);
}

/**
 * @param {number} nums
 * @return {number}
 * */

function findMostFrequentElements(nums) {
  let mostFrequentElements = [];
  counters = {};

  for (const num of nums) {
    if (counters.hasOwnProperty(num)) {
      counters[num]++;
    } else {
      counters[num] = 1;
    }
  }

  let max = -Infinity;

  for (const key in counters) {
    if (max < counters[key]) max = counters[key];
  }

  for (const key in counters) {
    if (counters[key] === max) mostFrequentElements.push(+key);
  }

  return mostFrequentElements;
}

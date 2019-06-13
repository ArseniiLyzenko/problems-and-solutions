/*
Given a string s and a non-empty string p, find all the start indices of p's
anagrams in s.

Strings consists of lowercase English letters only and the length of both
strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

function funcName(s, p) {
  let anagramIndices = [];
  let anagramSample_obj = new ObjFromString(p);

  for (let i = 0, s_len = s.length, p_len = p.length; i < s_len - p_len + 1; i++) {
    let potentialAnagram_str = s.slice(i, i + p_len);
    let potentialAnagram_obj = new ObjFromString(potentialAnagram_str);

    if ( isObjsEqual(potentialAnagram_obj, anagramSample_obj) ) {
      anagramIndices.push(i);
    }
  }

  return anagramIndices;
}

function ObjFromString(str) {
  for (let char of str) {
    if (this[char] === undefined) {
      this[char] = 1;
    } else {
      this[char]++;
    }
  }
}

function isObjsEqual(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;

  for (let prop in a) {
    if (a[prop] !== b[prop]) {
      return false;
    }
  }

  return true;
}
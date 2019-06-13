# problems-and-solutions
Solutions (+tests) for problems

---
#### Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.   
Note: 0 ≤ x, y < 2^31.   

Example:     
Input: x = 1, y = 4   
Output: 2   

Explanation:
```
1 (0 0 0 1)  
4 (0 1 0 0)   
     ↑   ↑   
```
       
The above arrows point to positions where the corresponding bits are different.   

[Solution](HammingDistance/index.js)

---
#### Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.  
Find all the elements of [1, n] inclusive that do not appear in this array.  
Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.  

Example:   
```
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```
[Solution](FindAllNumbersDisappearedInAnArray/index.js)

---
#### Find All Anagrams in a String

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
The order of output does not matter.

Example 1:
```
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```
Example 2:
```
Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```
[Solution](FindAllAnagramsInAString/index.js)

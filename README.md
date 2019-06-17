# problems-and-solutions
Solutions (+tests) for problems

---
### Hamming Distance

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
### Find All Numbers Disappeared in an Array

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
### Find All Anagrams in a String

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

---
### Merge Two Binary Trees

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
```
Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7           
      
Output:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
```
[Solution](MergeTwoBinaryTrees/index.js)

---
### Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. Note: A leaf is a node with no children.

Example:

Given binary tree [3, 9, 20, null, null, 15, 7],
```
    3
   / \
  9  20
    /  \
   15   7
```
return its depth = 3.

[Solution](MaximumDepthOfBinaryTree/index.js)

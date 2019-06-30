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

---
### Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
```
Input: [2,2,1]
Output: 1
```
Example 2:
```
Input: [4,1,2,1,2]
Output: 4
```
[Solution](SingleNumber/index.js)

---
### Invert Binary Tree

Invert a binary tree.

Example:
```
Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
```
Trivia:
This problem was inspired by this original tweet by Max Howell:
> Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

[Solution](InvertBinaryTree/index.js)

---
### Reverse Linked List

Reverse a singly linked list.

Example:
```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```
Follow up: a linked list can be reversed either iteratively or recursively. Could you implement both?

[Solution](ReverseLinkedList/index.js)

---
### Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```
Note:   
You must do this in-place without making a copy of the array.   
Minimize the total number of operations.

[Solution](MoveZeroes/index.js)

---
### Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
```
Input: [3,2,3]
Output: 3
```
Example 2:
```
Input: [2,2,1,1,1,2,2]
Output: 2
```
[Solution](MajorityElement/index.js)

---
### Convert BST to Greater Tree

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:
```
Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
              18
            /    \
          20      13
```
[Solution](ConvertBSTtoGreaterTree/index.js)

---
### Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```
[Solution](MergeTwoSortedLists/index.js)

---
### Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:
```
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
```
Example 2:
```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```
[Solution](BestTimeToBuyAndSellStock/index.js)

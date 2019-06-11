# problems-and-solutions
This repository keeps my mind sharp

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

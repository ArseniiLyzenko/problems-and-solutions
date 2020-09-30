/*
Roman numerals are represented by seven different
symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added
together. Twelve is written as, XII, which is simply X + II. The number twenty
seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is written
as IV. Because the one is before the five we subtract it making four. The same
principle applies to the number nine, which is written as IX. There are six
instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be
within the range from 1 to 3999.
*/

function romanToInteger(romanNum) {
  let resultInteger = 0;

  for (let i = 0, len = romanNum.length; i < len; i++) {

    if (i + 1 < len) {
      pair = romanNum[i] + romanNum[i + 1];

      if (romanSpecialCases.hasOwnProperty(pair)) {
        resultInteger += romanSpecialCases[pair];
        i++;
        continue;
      }
    }

    resultInteger += romanDictionary[romanNum[i]];
  }

  return resultInteger;
}

const romanDictionary = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}

const romanSpecialCases = {
  'IV': 4,
  'IX': 9,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900,
}

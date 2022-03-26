/*
    Longest substing without repeating characters

    Given a string s, find the length of the longest substring without repeating characters.

    Example 1:

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    
    Example 2:

    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    
    Example 3:

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
    

    Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

    (The algorithm technique used for solving this problem is known as sliding window technique)
*/

/**
 * @param {string}
 * @return {number}
 */ 

var lengthOfLongestSubstring = function (s) {

    if (!s) {
        return 0;
    }

    let end = 0;
    let start = 0;
    let maxLength = 0;

    const uniqueChar = new Set();

    const stringLength = s.length;

    while (end < stringLength) {
        if (!uniqueChar.has(s[end])) {
            uniqueChar.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChar.size);
        } else {
            uniqueChar.delete(s[start]);
            start++;
        }
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));

console.log(lengthOfLongestSubstring('bbbbb'));

console.log(lengthOfLongestSubstring('pwwkew'));

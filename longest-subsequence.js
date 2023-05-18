/**
 * Example of Dynamic programming
 * @param {string} text1 
 * @param {string} text2 
 * @param {number} index1 
 * @param {number} index2 
 * @returns {number} - length of longest subsequence
 * 
 */

const recursion = (text1, text2, index1, index2) => {
    
    if (index1 === text1.length || index2 === text2.length) {
        return 0;
    }

    let result;

    if (text1.charAt(index1) === text2.charAt(index2)) {
        index1 += 1;
        index2 += 1;
        result = 1 + recursion(text1, text2, index1, index2); 
    } else {
        result = Math.max(recursion(text1, text2, index1 + 1, index2), recursion(text1, text2, index1, index2 + 1))
    }
    
    return result;
};

const longestCommonSubsequence = (text1, text2) => {
    return recursion (text1, text2, 0, 0);
};

const subSequence = longestCommonSubsequence('aggtab', 'gxtxayb');

console.log(subSequence);
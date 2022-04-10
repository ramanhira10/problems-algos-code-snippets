/**
 * 
 * @param [] array
 * @description Check the pair whose sum is zero 
 * complexity is O(n)
 */

const sumZeroProblem = array => {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const sum = array[left] + array[right];

        if (sum === 0) {
            return [array[left], array[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
};

const inputArray = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

const result = sumZeroProblem(inputArray);

console.log(result);
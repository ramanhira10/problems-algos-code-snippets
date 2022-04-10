/**
 * 
 * @param [] array
 * @description Check the pair whose sum is zero 
 * complexity is O(n^2)
 */

function sumZeroProblem (array) {
    for (let number of array) {
        for (let j=1;j<array.length;j++) {
            if (number + array[j] === 0) {
                return [number, array[j]];
            }
        }
    }
}

const inputArray = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

const result = sumZeroProblem (inputArray);

console.log(result);
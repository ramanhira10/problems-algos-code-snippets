//[1, 2, 3, 4, 3, 5, 4, 6, 7, 8]

// Count largest sum of consecutive digits

// num = 4

/**
 * 
 */

const largestSumOfConsecutiveDigits = (array, num) => {
    const arrayLength = array.length;

    if (num > arrayLength) {
        throw new Error('num should not be greater than zero');
    } else {
        let max = 0;
        for (let i = 0;i < (arrayLength - num + 1); i++) {
            let tmp = 0;
            for (let j = 0; j < num; j++) {
                tmp += array[i + j];
            }

            if (tmp > max) {
                max = tmp;
            }
        }
        return max;
    }
}

const result = largestSumOfConsecutiveDigits([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);

console.log(result);
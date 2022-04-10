/**
 * Counting Unique numbers
 */

const countingUniqueNumbersInSortedArray = array => {

    const arrayLength = array.length;

    if (arrayLength) {
        let i = 0;

        for (let j=1;j<arrayLength;j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j];
            }
        }

        return i+1;
    } else {
        throw new Error('Invalid input')
    }
}

const result = countingUniqueNumbersInSortedArray([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]);

console.log(result);
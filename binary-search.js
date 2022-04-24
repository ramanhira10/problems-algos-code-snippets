// Divide & Conquer technique
// Find the index of given no in a sorted array 7[]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] ==> index 6 -> output

const binarySearch = (array, numToFind) => {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        
        let midIndex = Math.floor((min + max) / 2);
        let element = array[midIndex];

        if (element < numToFind) {
            min = midIndex + 1;
        } else if (element > numToFind) {
            max = midIndex -1;
        } else {
            return midIndex;
        }
    }

    return -1;
};


const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);

console.log(result);
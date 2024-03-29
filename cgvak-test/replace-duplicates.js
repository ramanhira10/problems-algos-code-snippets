/**
 * 
 * input = [1, 3, 3, 4, 6, 9, 9, 9, 12, 18];
 * 
 Expected output = [1, 3, 4, 6, 9, 12, 18, 0, 0, 0];

    - Array should be traversed only once
    - Should not use new Array, List etc
    - can use indexes
    - Array index order should be maintained

    AWS

    Microservices

    Cart to order confirmation workflow
 */

const input = [1, 3, 3, 4, 6, 9, 9, 9, 12, 18];

const replaceDuplicates = inputArr => {
    let outputArray = [];
    const maskedElements = [];
    let lastAddedElement = -1;

    inputArr.forEach(eachElement => {
        if(eachElement !== lastAddedElement) {
            outputArray.push(eachElement);
            lastAddedElement = eachElement;
        } else {
            maskedElements.push(0);
        }
    });

    return [...outputArray, ...maskedElements];
};

const maskedArray = replaceDuplicates(input);

console.log(input);
console.log(maskedArray);
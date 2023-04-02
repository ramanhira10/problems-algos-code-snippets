const camelCaseToKababCase = inputString => {

    const strToArray = inputStr.split('');

    const checkStr = strToArray.map(eachChar => /[A-Z]/.test(eachChar) ? `_${eachChar}` : eachChar);

    return checkStr.join('');
};

const inputStr = 'setHelloWorld';

const output = camelCaseToKababCase(inputStr);

console.log(output);
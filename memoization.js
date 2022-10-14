/**
 * Memoization is an optimization technique that can be used to reduce time-consuming calculations by saving previous input to something called cache and returning the result from it.
 */

let sum = 0;
const calc = num => {
    for (let i=0;i<=num;i++) {
        sum = sum + i;
    }
    return sum;
};

const memoize = fun => {
    const cache = {};

    return (...args) => {
        let n = args[0];
        if (n in cache) {
            return cache[n];
        } else {
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    };
};

console.time();
const wrapperFunc = memoize(calc);
console.log(wrapperFunc(5));
console.timeEnd();

console.time();
console.log(wrapperFunc(5));
console.timeEnd();
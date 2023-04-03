/**
 * Infinite Currying in Javascript 
 */

function add (a) {

    return function (b) {
        
        if (b) {
            return add(a + b);
        }   
    }
}

console.log(add(1)(2)());


function curry (func) {

    return function curried (...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}


function sum (a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));
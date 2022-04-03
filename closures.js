function closures () {

    let counter = 0;

    return function () {
        return counter++;
    }
}

let count = closures();

console.log(count());
console.log(count());
console.log(count());
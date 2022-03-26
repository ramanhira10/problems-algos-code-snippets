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

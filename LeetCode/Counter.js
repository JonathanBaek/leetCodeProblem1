/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = n; //**counter is declared and intialized with the value of the parameter "n" *//

    return function() { //**returns another function, which in this case is to return the value of the variable "counter", and increments it by a value of 1 *//

        return counter++; //**adds an increment of 1 *//
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
/**
 * @return {null|boolean|number|string|Array|Object}
 */
//** the method called ".last" is being added to the prototype of all arrays */
Array.prototype.last = function() {
    //** this line will check to see if the array has any elements */
    if(this.length) {
        //**after checking to see if the array has any elements, assuming it does, it will return the last element of that array */
        return this[this.length - 1];
        }
        //** otherwise, if the array is empty, it will return -1 */
            return -1;
         
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
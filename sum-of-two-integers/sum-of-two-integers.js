/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// using bit manipulation to add 2 integers 
var getSum = function(a, b) {
    // if one of the number is 0, return the other one
    if (a === 0) return b;
    if (b === 0) return a;
    // a will be the running addition result
    // b will hold the carries
    while (b != 0) {
        // use 'and' operator to find the carry

        let carry = a & b;
        // use 'xor' (exclusive or) operator to simulate addition within the iteration
        // addition result will be stored in a
        a = a ^ b;
        // use 'left shift' operator to hold the left-shifted carry
        b = carry << 1;
    }
    return a;
};
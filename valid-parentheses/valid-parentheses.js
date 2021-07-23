/**
 * @param {string} s
 * @return {boolean}
 */

// I: string consists of parentheses '()[]{}'
// O: boolean, whether or not the input string is valid 
// valid conditions: 
    // 1. open brackets must be closed by the same type of brackets.
    // 2. open brackets must be closed in correct order.
// C: none
// E: none
var isValid = function(s) {
    // create a stack to store the closing parentheses of the input string
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(')');
        } else if (s[i] === '[') {
            stack.push(']');
        } else if (s[i] === '{') {
            stack.push('}');
        // if encounter a closing parenthesis check if it is equal to top of the stack
            // if not then the string is invalid so return false
        } else if (stack.pop() !== s[i]) {
            return false;
        }
    }
    return stack.length === 0;
    
};
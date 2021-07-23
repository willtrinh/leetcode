/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length < 2) return true;
    // use regex to eliminate anything that is not alphanumeric characters and ignore cases
    s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};


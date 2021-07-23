/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let freqCounter = {};
    
    for (let i = 0; i < s.length; i++) {
        freqCounter[s[i]] = freqCounter[s[i]] + 1 || 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!freqCounter[t[i]]) {
            return false;
        } else {
            freqCounter[t[i]] = freqCounter[t[i]] - 1;
        }
    }
    return true;
};
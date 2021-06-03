/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const obj = {}; // keep track of occurrences for each num in nums
    for (const num of nums) {
        obj[num] = obj[num] + 1 || 1; // count occurrences
        // if num appears at least twice then return true
        if (obj[num] > 1) return true;
    }
    // else return false if every element is distinct
    return false;
};

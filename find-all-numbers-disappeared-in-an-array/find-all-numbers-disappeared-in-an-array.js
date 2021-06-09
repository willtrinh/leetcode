/**
 * @param {number[]} nums
 * @return {number[]}
 */

// I: array of integers
// O: array of missing numbers in range [1, n]
// C: O(n) time, O(1) space
// E: none
var findDisappearedNumbers = function(nums) {
    let res = [];
    // negate all integers that appear in range [1, n]
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let index = num - 1;
        nums[index] = Math.abs(nums[index]) * -1;
    }
    // push index of missing numbers to res array
    for (let i = 0; i <nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }
    return res;
};
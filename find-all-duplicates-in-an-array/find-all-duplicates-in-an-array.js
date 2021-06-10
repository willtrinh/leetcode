/**
 * @param {number[]} nums
 * @return {number[]}
 */

// I: integer array
// O: array of all duplicate integers
// C: O(n) time, O(1) space
// E: none
var findDuplicates = function(nums) {
    if (nums.length === 1) return [];
    let res = [];
    
    for (let i = 0; i < nums.length; i++) {
        // find correct index of number in [1, n]
        let index = Math.abs(nums[i]) - 1;
        // if the number at index is already negative then it is a duplicate
        if (nums[index] < 0) {
            res.push(index + 1);
        }
        // negate index
        nums[index] = -nums[index];
    }
    return res;
};
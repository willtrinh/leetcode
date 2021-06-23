/**
 * @param {number[]} nums
 * @return {number}
 */

// I: integer array
// O: minimum value in the array
// C: O(logn) time complexity
// E: none

// check if the next value is less than the current value
// that would be the minimum value since the array is sorted
var findMin = function(nums) {
    let minVal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < minVal) return nums[i];
    }
    return minVal;
};
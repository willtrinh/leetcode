/**
 * @param {number[]} nums
 * @return {number}
 */
// I: array of n distinct numbers
// O: missing number within the range [0, n]
// C: O(n) time, O(1) space
// E: none
// can't use array sort since that would take O(nlogn)
// need to modify? the array in-place to avoid extra space
var missingNumber = function(nums) {
    let missingNum = nums.length;
    for (let i = 0; i < nums.length; i++) {
        // sum up the numbers in the array
        // and substract numbers from 1 to n at the same time
        missingNum += i - nums[i];
    }
    return missingNum;
};
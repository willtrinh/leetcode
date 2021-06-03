/**
 * @param {number[]} nums
 * @return {number}
 */
// I: array of n distinct numbers
// O: missing number within the range [0, n]
// C: O(n) time, O(1) space
// E: none
// can't use array sort since that would take O(nlogn)
// can't use extra data structure to keep it O(1) space
var missingNumber = function(nums) {
    let rangeSum = nums.length;
    let numSum = 0;
    for(let i = 0; i < nums.length; ++i) {
        // sum up all numbers within the range [0, n]
        rangeSum += i;
        // sum up all numbers in the nums array
        numSum += nums[i];
    }
    // the difference is the missing number
    return rangeSum - numSum;
};

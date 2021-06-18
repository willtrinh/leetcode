/**
 * @param {number[]} nums
 * @return {number}
 */

// I: int array
// O: largest sum of the contiguous subarray
// C: O(n) time complexity
// E: none

var maxSubArray = function(nums) {
    if (nums.length < 2) return nums[0];
    let tempSum = nums[0], sum = nums[0];
    // iterate through the array
    for (let i = 1; i < nums.length; i++) {
        // check to see whether or not to change current tempSum
        tempSum = Math.max(tempSum + nums[i], nums[i]);
        // check to see whether or not to change current sum (largest sum)
        sum = Math.max(tempSum, sum);
    }
    
    return sum;
};
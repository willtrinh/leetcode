/**
 * @param {number[]} nums
 * @return {number}
 */

// I: integer array
// O: product of the largest contiguous subarray
// C: none
// E: none

// need to keep track of negative values in the array
// need to keep track of current minProduct and maxProduct since we have negative values in the array
// which would make maxProduct smaller and minProduct bigger and we need to swap them when that happens

var maxProduct = function(nums) {
    if (nums.length < 2) return nums[0];
    let minProduct = nums[0], maxProduct = nums[0], result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // multiple by negative value would make minProduct > maxProduct so we need to swap them
        if (nums[i] < 0) {
            let temp = minProduct;
            minProduct = maxProduct;
            maxProduct = temp;
        }
        minProduct = Math.min(minProduct * nums[i], nums[i]);
        maxProduct = Math.max(maxProduct * nums[i], nums[i]);
        // check to see if maxProduct is larger than current result product
        result = Math.max(result, maxProduct);
    }
    return result;
};
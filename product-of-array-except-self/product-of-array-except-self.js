/**
 * @param {number[]} nums
 * @return {number[]}
 */
// I: integers array
// O: array in which nums[i] = product of all elements of nums except nums[i]
// C: O(n) time, O(1) space (follow up, output array does not count as extra space)
// E: none
var productExceptSelf = function(nums) {
    if (nums.length === 0) return [];
    let n = nums.length;
    let res = [];
    // calculate left products and store in res array
    res[0] = 1;
    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    // calculate right products
    let rightProduct = 1; 
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return res;
};
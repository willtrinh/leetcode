/**
 * @param {number[]} nums
 * @return {number}
 */
// I: array of integers
// O: find the number that appears only 1
// C: O(n) time, O(1) space
// E: none

// this solution uses extra space and O(n) time
var singleNumber = function(nums) {
    let numsObj = {};
    
    for (let i = 0; i < nums.length; i++) {
        numsObj[nums[i]] = numsObj[nums[i]] + 1 || 1;
    }
    for (const num in numsObj) {
        if (numsObj[num] === 1) return num;
    }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// I: array of integers, target integer
// O: indices of 2 numbers that add up to target integer
// C: less than O(n^2) time (follow-up)
// E: none

// i.e: 
var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        // check if complement of nums[i] exists in map
        let found = map[complement]; 
        // if complement exists then found and i are indices that addd up to target
        if (found !== undefined) {
            return [found, i];
        }
        // map current val:index as key:value pairs
        map[nums[i]] = i;
    }
};
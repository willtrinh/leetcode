/**
 * @param {number[]} nums
 * @return {number}
 */

// I: sorted integer array in non-decreasing order
// O: number of unique elements in the array (without duplicates)
// C: modify the input array in-place with O(1) extra memory
// E: none

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let index = 0;
    for (const num of nums) {
        // if not first index or if prev value != current value
        // increment unique count and overwrite current value at index
        // with current value of input array
        if (index === 0 || nums[index - 1] !== num) {
            nums[index++] = num;
        }
    }
    return index;
};
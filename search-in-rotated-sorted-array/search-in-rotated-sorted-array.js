/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// I: rotated integer array (distinct values, ascending order), a target number
// O: index of target if it is in nums, -1 if not in nums
// C: O(logn) time complexity
// E: return -1 target is not in nums array

// approach: find the index of the smallest value
// check if value at that index is <= or >= target
// if target is >= smallest value and target <= last value
// move left to smallest value position and do binary search on right side
// vice versa

var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    // binary search to find the index with the smallest value
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        // if mid value > right value then we know the array is rotated
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    let start = left; // index of the smallest value
    // reset left and right index
    left = 0, right = nums.length - 1;

    if (target >= nums[start] && target <= nums[right]) {
        left = start;
    } else { 
        right = start;
    }
    // binary search on either left side of smallest value or right side of smallest value
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // return -1 if target is not in nums
    return -1;
};
/**
 * @param {number[]} nums
 * @return {number}
 */

// I: integer array
// O: minimum value in the array
// C: O(logn) time complexity
// E: none

// use a "modified" binary search
// check if first value > last value in the array.
// since the array is sorted, if the first value > last value
// then that means the array has been rotated

var findMin = function(nums) {
    if (nums.length === 1) return nums[0];
    // if first value < last value, array is sorted and smallest value is first value 
    let left = 0, right = nums.length - 1;
    if (nums[0] < nums[right]) return nums[0];
    
    // binary search
    while (right >= left) {
        let mid = Math.floor(left + (right - left) / 2);
        // if mid element is larger than its next element then mid+1 element is the smallest
        if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
        // if mid element is lesser than its prev element then mid element is the smallest
        if (nums[mid] < nums[mid - 1]) return nums[mid];
        // if mid element is larger than 0th element then we need to check right side
        if (nums[mid] > nums[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};

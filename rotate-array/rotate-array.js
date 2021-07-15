/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// I: an array, non-negative k steps
// O: rorated array by k steps to the right
// C: in-place with O(1) extra space
// E: none

// follow-up: come up with 3 different ways to solve this problem

// naive solution, brute force, time O(n * k), space O(1)
// var rotate = function(nums, k) {
//     // rotate all elements of the array in k steps
//     // by rotating the elements to the right by 1 each step
//     let temp, prev;
//     for (let i = 0; i < k; i++) {
//         prev = nums[nums.length - 1];
//         for (let j = 0; j < nums.length; j++) {
//             temp = nums[j];
//             nums[j] = prev;
//             prev = temp;
//         }
//     }
// };

// optimized solution, using extra array, time: O(n), space: O(n)
// var rotate = function(nums, k) {
//     let rotatedArr = [];
    
//     for (let i = 0; i < nums.length; i++) {
//         // place every element of the input array at its correct position
//         // i.e. value at index i in input array is placed at index (i + k) % nums.length
//         rotatedArr[(i + k) % nums.length] = nums[i];
//     }
//     // copy rotated array to original one
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = rotatedArr[i];
//     }
// }

// optimized solution, using reverse, time: O(n), space: 0(1)
var rotate = function(nums, k) {
    // reverse all elements of the array
    // then reverse the first k elements followed by
    // reversing the rest nums.length - k elements
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}
// helper function
function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}


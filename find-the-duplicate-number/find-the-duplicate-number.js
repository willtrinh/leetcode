/**
 * @param {number[]} nums
 * @return {number}
 */
// I: array of integers
// O: find duplicate number
// C: solve without modifying nums, O(1) space, O(n) time (follow up)
// E: none

// reference: Floyd's Cycle Finding Algorithm (Tortoise and Hare)
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    
    slow = 0;
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
};
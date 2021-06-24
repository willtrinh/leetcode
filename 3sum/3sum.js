/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// I: integer array
// O: all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0
// C: solution set must not contain duplicate triplets
// E: none

var threeSum = function(nums) {
    // if we don't have at least 3 numbers then return empty array
    if (nums.length < 3) return [];
    
    let triplets = [];
    // sort the array
    nums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // since the array is sorted, positive number can't sum to triplet's target sum
        // which is 0, so no need to continue further
        if (nums[i] > 0) break;
        
        // solution set cannot contain duplicate triplets so we need to skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let j = i + 1; // j is the middle index between i and k
        let k = nums.length - 1; // k is the right most index
        
        // move j and k toward each other and increment i when they meet
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            // push the triplet to triplets array if they add up to 0
            if (sum === 0) {
                triplets.push([nums[i], nums[j], nums[k]]);
                // increment j and decrement k to skip duplicates
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;

                // move j forward and k backward
                j++;
                k--;
            // if the sum is smaller than 0, move j forward
            } else if (sum < 0) {
                j++;
            // if sum is larger than 0, move k backward
            } else {
                k--;
            }
        }
    }
    
    return triplets;
};
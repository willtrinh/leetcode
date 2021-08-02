/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // if the input array doesn't have at least 3 numbers then there is no triplet
    if (nums.length < 3) return [];
    let triplets = [];
    // sort the array
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                triplets.push([nums[i], nums[j], nums[k]]);
                // increment j and decrement k to skip duplicates
                while (nums[j] === nums[j+1]) j++;
                while (nums[k] === nums[k-1]) k--;
                // move j forward and k backward
                j++;
                k--;
            // else if the sum is less than 0, move j forward
            } else if (sum < 0) {
                j++;
            // else if sum is larger than 0, move k backward    
            } else {
                k--;
            }
            
        }
    }
    
    return triplets;
};
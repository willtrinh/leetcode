/**
 * @param {number[]} height
 * @return {number}
 */
// I: array of non-negative integers
// O: max area of water
// C: none
// E: none

var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    
    while (left < right) {
        // find the smaller side
        let smallerSide = Math.min(height[left], height[right]);
        // max area is limited by the height of the smaller side
        let area = (right - left) * smallerSide;
        maxArea = Math.max(maxArea, area);
        // move left and right toward the center
        // get rid of the smaller side
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};
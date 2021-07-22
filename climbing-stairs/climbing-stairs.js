/**
 * @param {number} n
 * @return {number}
 */
// I: number of steps to reach the top
// O: number of distinct ways to climb to the top (each time you can either climb 1 or 2 steps)
// C: none
// E: none

// we can reach ith step in 2 ways:
  // taking a single step from (i - 1)th step
  // taking 2 steps from (i - 2)th step
// therefore, total number of ways to reach ith is equal to the sum of ways of reaching
// (i - 1)th step and ways of reaching (i - 2)th step.

// O(n) time complexity
// O(n) space complexity (used additional dp array of size n)

// dynamic programming, store ways of reaching ith steps in dp[i]
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    let dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
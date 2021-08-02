/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// I: integer array of different coins, integer total amount of money to change
// O: lowest number of coins needed to make up to the input amount
// C: none
// E: if amount cannot be made up by any combination of the coins, return -1

const coinChange = (coins, amount) => {
    // create a dp array to store the least amount of coins that make up the value equals to i
    const dp = Array(amount + 1).fill(amount + 1);
    // making change with minimum coins for 0 will always be 0, doesn't matter what coins we have
    dp[0] = 0;
    // iterate through the amount from 1 to amount
    for (let i = 1; i <= amount; i++) {
        // for each coin given
        for (const coin of coins) {
            // update dp[i] if it is a more optimal solution
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    // dp[amount] will hold the min number of coins needed to make up the amount
    // if we don't have the answer then dp[amount] > amount will be true which
    // we will return -1 
    return dp[amount] > amount ? - 1 : dp[amount];
};
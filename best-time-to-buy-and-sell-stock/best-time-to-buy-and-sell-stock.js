/**
 * @param {number[]} prices
 * @return {number}
 */

// I: array of stock prices
// O: maximum profit
// C: none
// E: if no profit, return 0
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE;
    
    for (let i = 0; i < prices.length; i++) {
        // find smallest number in the array
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        }
        // find largest difference (profit) 
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
};
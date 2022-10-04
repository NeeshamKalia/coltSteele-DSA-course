/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. */


function maxProfit (prices){
    let maxP = 0, min = Number.MAX_VALUE;
    for(let i = 0; i<prices.length; i++){
        min = Math.min(min, prices[i])
        maxP = Math.max(prices[i]-min, maxP)
    }return maxP
}


console.log(maxProfit([4,5,6,7,8,1]))

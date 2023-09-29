/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = 10001;
    let profit = 0;

    for(let i=0;i<prices.length;i++){
        if(prices[i]< min){
            min = prices[i];
            
        }
        
        if(profit< prices[i]- min){
            profit = prices[i] - min;
        }
    }

    return profit;
};

console.log('profit is '+ maxProfit([7,6,4,3,1]))
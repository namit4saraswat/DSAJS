function cutRod(lengths, prices, n) {
    // Base case: If the length is 0, the price is 0
    if (n === 0) {
        return 0;
    }

    // Initialize the maximum value
    let maxPrice = -Infinity;

    // Try all possible lengths smaller than n
    for (let i = 0; i < n; i++) {
        // Check if cutting at position i yields a better price
        maxPrice = Math.max(maxPrice, prices[i] + cutRod(lengths, prices, n - i - 1));
    }

    return maxPrice;
}


function maxProfitWeight(weigth,i,price,pSum,Tweigth,ans){
    if(Tweigth<0 || i===weigth.length){
        return 
    }
    
    if(Tweigth>=0){
        pSum = pSum + price[i]
        ans[0] = Math.max(pSum,ans[0])
    }
    maxProfitWeight(weigth,i,price,pSum,Tweigth-weigth[i],ans)
    pSum = pSum - price[i]
    maxProfitWeight(weigth,i+1,price,pSum,Tweigth-weigth[i+1],ans)
    return ans[0]
}

// Example usage:
const rodLengths = [1, 2, 3, 4, 5, 6, 7, 8];
const rodPrices = [1, 5, 8, 9, 10, 17, 17, 20];
const rodSize = rodLengths.length;


console.log(maxProfitWeight(rodLengths, 1,rodPrices,0,rodSize,[0]))



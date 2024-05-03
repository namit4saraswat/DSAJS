let dp = Array(5).fill(Array(5))
function maxProfitWeight(weigth,i,price,pSum,Tweigth,ans){
    if(i===weigth.length){
        return 
    }
    wSum = wSum + weigth[i]
    if(wSum<=Tweigth){
        pSum = pSum + price[i]
        ans[0] = Math.max([pSum],ans)
    }
    maxProfitWeight(weigth,i+1,price,pSum,Tweigth-weigth[i],ans)
    wSum = wSum - weigth[i]
    pSum = pSum - price[i]
    maxProfitWeight(weigth,i+1,price,pSum,Tweigth,ans)
    return ans[0]
}


console.log(maxProfitWeight([1,3,4,5], 4,[1,4,5,7],7))
function maxProfitWeight1(weigth,i,price,pSum,Tweigth){
    if(i===weigth.length ){
        return 0
    }
    
    if(weigth[i]<=Tweigth){
        return Math.max (price[i] + maxProfitWeight1(weigth,i+1,price,pSum+price[i],Tweigth-weigth[i]),maxProfitWeight1(weigth,i+1,price,pSum,Tweigth))
    }else{
        return  maxProfitWeight1(weigth,i+1,price,pSum,Tweigth)
    }
}

//now converting this code to memoization, top down
let t=Array(5).fill(Array(8).fill(-1))

function maxProfitWeight2(weigth,i,price,pSum,Tweigth){
    if(t[i][Tweigth]!=-1){
        return t[i][Tweigth]
    }
    if(i===weigth.length ){
        return 0
    }
    
    if(weigth[i]<=Tweigth){
        return t[i][Tweigth]=Math.max (price[i] + maxProfitWeight2(weigth,i+1,price,pSum+price[i],Tweigth-weigth[i]),maxProfitWeight2(weigth,i+1,price,pSum,Tweigth))
    }else{
        return  t[i][Tweigth]=maxProfitWeight2(weigth,i+1,price,pSum,Tweigth)
    }
}

//top down approach
let mtr = Array(5).fill(Array(8))
function maxProfitWeight3(weigth,n,price,w){
    for(let i=0;i<=n;i++){
        for(let j=0;j<=w;j++){
            if(i===0||j===0){
                mtr[i][j]=0
            }
        }
    }

    for(let i=1;i<=n;i++){
        for(let j=1;j<=w;j++){
            if(weigth[i-1]<=j){
                mtr[i][j]=Math.max(price[i-1]+mtr[i-1][w-weigth[j-1]],mtr[i-1][j])
            }else{
                mtr[i][j]=mtr[i-1][j]
            }  
        }
    } 

    return mtr[n][w]

}


console.log(maxProfitWeight3([1,3,4,5], 4,[1,4,5,7],7))
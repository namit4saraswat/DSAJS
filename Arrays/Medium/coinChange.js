/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(coins, amount) {
    if(amount===0){
        return 
    }
    
    for(let i=0;i<coins.length;i++){
        change(coins,amount-coins[i])   
    }

};

function change2(coins, amount,sum,ans,out,i) {
    if(sum>amount || i>=coins.length){
        if(sum===amount){
            console.log(ans)
        }
        return
    }
    ans.push(coins[i])
    sum=sum+coins[i]
    change2(coins, amount,sum,ans,out,i)
    ans.pop()
    sum=sum-coins[i]
    change2(coins,amount,sum,ans,out,i+1)
};

function change3(coins,n,amount){

    if(amount===0){
        return 1
    }
    if(n<=0 || amount<0){
        return 0
    }

    return change3(coins,n-1,amount)+change3(coins,n,amount-coins[n-1])
}


console.log(change3([2, 5, 3, 6], 4,10))
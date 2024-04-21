
var divisorGameUtil = function(n,alice,x) {
    if(n===2 && alice){
        return true
    }else if(n===2 && !alice){
        return false
    }
    if((n===1 || n===3) && !alice ){
        return true
    }else{
        if((n===1 || n===3) && alice){
            return false
        }
    }
    alice=!alice
    return divisorGameUtil(n-x,alice,x)

};

var divisorGame = function(n){
    if(n===1){
        return false
    }
   for(let i=n-1;i>=1;i--){
    if(n%i===0){
        return !divisorGame(n-i)
    }
   }
}

console.log(divisorGame(1))
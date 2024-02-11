
var divisorGame = function(n){
    if(n===1){
        return false
    }
    for(let i=1;i<n;i++){
        if(n%i===0){
           return !divisorGame(n-i)
        }
    }
}
console.log(divisorGame(1))

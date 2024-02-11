let alice = false
var divisorGame = function(n){
    if(n===1){
        return alice
    }
    alice = !alice

    divisorGame(n-1)

}

console.log(divisorGame(n))

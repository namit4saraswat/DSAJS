var factorial = function(n){
    if(n===1){
        return 1
    }

    return factorial(n-1) * n
}

console.log(factorial(5))
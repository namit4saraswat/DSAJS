let count=1
var perfectSquare = function(n) {
    if(Math.floor(Math.sqrt(n)) === Math.sqrt(n)){
        return count
    }

    n=n-1
    if(Math.floor(Math.sqrt(n-1)) === Math.sqrt(n-1)){
        
    }else{

    }
    return perfectSquare(n) = 1+ Math.min(perfectSquare(n-1))
};

console.log(perfectSquare(12))
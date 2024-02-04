/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<=1){
        return x
    }
    
    let left = 0;
    let right = x;

    while(left<right){
        let mid = Math.floor((right+left)/2)
        if(mid*mid>x){
            right = mid
        }else{
            left = mid+1
        }
    }

    return(left-1)
};

console.log(mySqrt(2))
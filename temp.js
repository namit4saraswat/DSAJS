/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function square(num){
        let out=0
        while(num>0){
            out+=Math.pow(num%10,2)
            num=Math.floor(num/10)
        }
        return out
    }
    
    let slow=n
    let fast=n
    while(slow!=1 && fast !=1){
        
        slow=square(slow)
        fast=square(square(fast))
        if(slow===fast){
            return false
        }
    }

    return true
    

};

console.log(isHappy(19))
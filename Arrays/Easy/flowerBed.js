/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n === 0){
        return true;
    }
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i] === 1){
            continue;
        }else if((flowerbed[i+1] === 0 || flowerbed[i+1] == null) && (flowerbed[i-1] === 0 || flowerbed[i-1] == null)){
            n--;
            flowerbed[i] = 1;
            if(n === 0){
                return true;
            }
        }
    }

    return false;
};

console.log(canPlaceFlowers([0,0,1,0,1], 1))
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies)

    let result = [];
    for(let i=0;i<candies.length;i++){
       if(candies[i] + extraCandies >= max){
        result[i]= true
       }else{
        result[i] = false;
       }
    }

    return result;
};

console.log(kidsWithCandies([12,1,12], 10))
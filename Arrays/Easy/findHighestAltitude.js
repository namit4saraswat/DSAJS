/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = -101;
    let alt = 0;
    for(let i=0;i<gain.length;i++){
        if(max<alt){
            max=alt
        }
        alt = alt + gain[i];
    }
    return Math.max(alt,max);
};

console.log(largestAltitude([44,32,-9,52,23,-50,50,33,-84,47,-14,84,36,-62,37,81,-36,
    -85,-39,67,-63,64,-47,95,91,-40,65,67,92,-28,97,100,81]))
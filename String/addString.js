/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let m = num1.length-1
    let n = num2.length-1
    let carryOver = 0
    let ans =''
    let unitSum =0
    while(m>=0 || n>=0 || carryOver){
        if(m>=0){unitSum = parseInt(num1[m])
        m--}
        if(n>=0){unitSum = unitSum +  parseInt(num2[n])
        n--}
        unitSum = unitSum + carryOver
        carryOver=Math.floor(unitSum/10)
        unitSum=unitSum%10
        ans = unitSum + ans
        unitSum=0
    }

    return ans
};

console.log(addStrings('456', '77'))
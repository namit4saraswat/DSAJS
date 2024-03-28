/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let m = a.length-1
    let n = b.length-1
    let carryOver = 0
    let ans =''
    let unitSum =0
    while(m>=0 || n>=0 || carryOver){
        if(m>=0){unitSum = parseInt(a[m])
        m--}
        if(n>=0){unitSum = unitSum +  parseInt(b[n])
        n--}
        unitSum = unitSum + carryOver
        if(unitSum>1){
            unitSum=unitSum%2
            carryOver=1
        }else{
            carryOver=0
        }
        ans = unitSum + ans
        unitSum=0
    }

    return ans
};


console.log(addBinary('1111','1111'))
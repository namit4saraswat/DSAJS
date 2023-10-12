/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
    let ans2 = "";
    let convert = function(x){
        x = Math.floor(x);
        if(x>=1000){
            return {val1 : x-1000,val2 : 'M'};
        }
        if(x>=500 && x<1000){
            if(x=== 900){
                return { val1: 0, val2: 'CM'}
            }
            return {val1: x-500,val2: 'D'};
        }
        if(x>=100 && x<500){
            if(x=== 400){
                return { val1: 0, val2: 'CD'}
            }
            return {val1: x-100, val2: 'C'};
        }
        if(x>=50 && x<100){
            if(x=== 90){
                return { val1: 0, val2: 'XC'}
            }
            return {val1: x-50,val2: 'L'};
        }
        if(x>=10 && x<50){
            if(x=== 40){
                return { val1: 0, val2: 'XL'}
            }
            return {val1: x-10,val2: 'X'};
        }
        if(x>=5 && x<10){
            if(x=== 9){
                return { val1: 0, val2: 'IX'}
            }
            return { val1: x-5,val2: 'V'};
        }
        if(x>=1 && x<5){
            if(x=== 4){
                return { val1: 0, val2: 'IV'}
            }
            return { val1: x-1,val2: 'I'};
        }
    };


    let convertUnit = function(unit){
        if(unit === 0){
            return ans2
        }
        op2 = convert(unit);
        if(op2.val1 === 0){
            ans2 =  ans2 + op2.val2;
            }else{
            ans2 =  ans2 + op2.val2;
            convertUnit(op2.val1);
            }
            return ans2;
    }

    let result = "";
    let i=0;
    const n = num.toString().length;
    let base = Math.pow(10,n);
    while(i<n){
        let unit = parseInt(num.toString().charAt(i));
        result = convertUnit(unit * base * 0.1);
        base = base /10;
        i++;
    }
    return result;
};


console.log("Converting " + intToRoman(400));
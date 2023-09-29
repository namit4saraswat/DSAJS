/**
 * @param {string} s
 * @return {number}
 */

var convert = function(s){
    switch(s){
        case 'M':
            return 1000;
        case 'D':
            return 500;
        case 'C':
            return 100;
        case 'L':
            return 50;
        case 'X':
            return 10;
        case 'V':
            return 5;
        case 'I':
            return 1; 
    }

};

var romanToInt = function(s) {
    let i=0;
    const n = s.length;
    let ans =0;
    while(i<n-1){
        if(convert(s.charAt(i))>=convert(s.charAt(i+1))){
            ans = ans + convert(s.charAt(i));
        }else{
            ans = ans + convert(s.charAt(i+1))-convert(s.charAt(i));
            i++;
        }
        i++;
    }
    if(i==n-1){
        ans = ans + convert(s.charAt(n-1))
    }

    return ans;
};

console.log("Converting " + romanToInt("MCMXCIV"));


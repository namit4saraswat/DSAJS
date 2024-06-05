function intToBit(n){
    let ans=''
    if(n===0){
        return 0
    }
    while(n>0){
        if(n%2===0){
            ans= '0' + ans
        }else{
            ans = '1' + ans
        }
        n=parseInt(n/2)
        if(n===1){
            ans= '1' + ans
        }
    }

    return  ans
}

function decToBinary(n)
    {
        let ans=''
        // Size of an integer is assumed to be 32 bits
        for (i = 31; i >= 0; i--) {
            var k = n >> i;
            if (!k)
                ans = ans + '1'
            else
                ans = ans + '0'
        }
        return ans
    }

    // driver code
var n = 32;
console.log(decToBinary(7))

// console.log(intToBit(0))
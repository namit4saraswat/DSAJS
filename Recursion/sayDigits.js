let ans = ''
var sayDigits = function(n){
    if(n===0){
        return
    }

    let unit = n%10
    switch(unit){
        case 1:
            ans = 'One'
            break
        case 2:
            ans = 'Two'
            break
        case 3:
            ans = 'Three'
            break
        case 4:
            ans = 'Four'
            break
        case 5:
            ans = 'Five'
            break
        case 6:
            ans = 'Six'
            break
        case 7:
            ans = 'Seven'
            break
        case 8:
            ans = 'Eight'
            break
        case 9:
            ans = 'Nine'
            break
        case 0:
            ans = 'Zero'
            break    
    }
    return  sayDigits(Math.floor(n/10)) + ans
    
}

console.log(sayDigits(535))
let i=0
function isPalUtil(s,n){
    if(s[n-1]!=s[0]){
        return false
    }
    if(n===1 || n===0){
        return true
    }
    return isPalUtil(s.substring(1,n-1),n-2)
}

function isPalindrom(s){
    if(!isPalUtil(s,s.length)){
        return false
    }
    return true
}

console.log(isPalindrom('saswas'))
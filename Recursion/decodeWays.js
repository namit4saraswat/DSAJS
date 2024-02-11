var getCharcter = function(num){
    return String.fromCharCode(parseInt(num)+64)
}

let count=0
var numDecodings = function(s, pos) {
    if(pos===s.length-1){
        return 1
    }
    if(pos===s.length-2){
        return 2
    }
    if((s.length===2 || s.length===1) && (parseInt(s)>26 || s[0]===1)) {
        return 0
    }
    return numDecodings(s,pos+1) + numDecodings(s,pos+2) 
    
};
console.log(numDecodings('127',0))
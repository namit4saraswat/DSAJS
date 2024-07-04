function longestPanlid(str){
    let out=''
    for(let i=0;i<str.length;i++){
        let ans = expand(str,i-1,i)
        if(ans.length > out.length){
            out=ans
        }
        ans = expand(str,i,i)
        if(ans.length > out.length){
            out=ans
        }
    }

    return out

}

function expand(str,left,right){
    while(str[left] ===str[right] && left>=0 && right<str.length){
        left--
        right++
    }

    return str.substring(left+1,right)
}


console.log(longestPanlid(''))
function permWithSpace(i,str,res,S){
    if(i===S.length-1){
        str=str+S[i]
        res.push(str)
        console.log(res)
        return
    }
    permWithSpace(i+1,str+S[i]+" ",res,S)
    permWithSpace(i+1,str+S[i],res,S)
}

permWithSpace(0,'',[],'ABC')
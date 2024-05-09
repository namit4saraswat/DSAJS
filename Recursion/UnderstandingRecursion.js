function recur(str,i,ans){
    if(i===str.length-1){
        return
    }
    // ans=str[i]
    console.log(str[i])
    recur(str,i+1,ans)
    recur(str,i+1,ans)
}

recur("ABC",0)
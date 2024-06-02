function recur(str,i,ans){
    if(i===str.length-1){
        return
    }
    // ans=str[i]
    console.log(str[i])
    recur(str,i+1,ans)
    recur(str,i+1,ans)
}


function recur2(str,i,ans){
    if(ans.length===str.length){
        console.log(ans)
        return
    }
    // ans=str[i]
    ans = ans + (str[i])
    recur2(str,i,ans)
    recur2(str,i,ans)
}

recur2("ABC",0,'')
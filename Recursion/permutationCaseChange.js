function caseChange(i,str,ans){
    if(i===str.length){
        console.log(ans)
        return
    }

    caseChange(i+1,str,ans+str[i].toUpperCase())
    caseChange(i+1,str,ans+str[i])
}


function caseChangeWithNumber(i,str,ans){
    if(!isNaN(str[i])){
        ans=ans+str[i]
        i=i+1
    }
    if(i===str.length){
        console.log(ans)
        return
    }
    

    caseChangeWithNumber(i+1,str,ans+str[i].toUpperCase())
    caseChangeWithNumber(i+1,str,ans+str[i])
}

caseChange(0,'a2','')
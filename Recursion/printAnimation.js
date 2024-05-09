function permWithSpace(str,i){
    if(i===str.length){
        return
    }
    str=str.substring(0,i)+ " "+ str.substring(i,str.length)
    console.log(str)
    permWithSpace(str,i+1)
    permWithSpace(str,i+1)
}

permWithSpace('ABC',1)
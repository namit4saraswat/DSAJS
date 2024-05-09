function printBit(n,i,ans,p,q){
    if(p>q){
        return 
    }
    if(i===n){
        console.log(ans)
        return 
    }

    printBit(n,i+1,ans+'0',p+1,q)
    printBit(n,i+1,ans+'1',p,q+1)

}

printBit(3,0,'',0,0)
function josephus(n,k,j,orgk){
    if(j>=n.length){j=j%n.length}
    if(n.length===1){
        console.log(n[0])
        return 
    }
    if(k===1){
        n.splice(j,1)
        k=orgk
    }

    
    
    josephus(n,k-1,j+1,orgk)
}

josephus([1,2,3,4,5,6,7],3,0,3)
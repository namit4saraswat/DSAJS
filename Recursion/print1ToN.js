function print1ToN(N){
    if(N===0){
        return 
    }
    
    print1ToN(N-1)
    console.log(N)
}

print1ToN(4)
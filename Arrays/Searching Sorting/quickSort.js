var swap = function(X,a,b){
    let temp = X[a]
    X[a] = X[b]
    X[b] = temp
    return X
}

var partition = function(X,l,r){
    let pIndex = r
    let j=l-1
    for(let i=l;i<=r;i++){
        if(X[pIndex]>X[i]){
            j++
            X = swap(X,j,i)
        }
    }
    X=swap(X,j+1,r)
    return j+1
}

var quickSort = function(X, l,r){
    if(l>=r){
        return
    }
    let pIndex = partition(X,l,r)
    quickSort(X,l,pIndex-1)
    quickSort(X,pIndex+1,r)

    return X
}


console.log(quickSort([12,54,6,2,7,14,15,16],0,7))
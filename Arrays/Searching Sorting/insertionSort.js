var insertionSort = function(arr){
    let i,key,j
    for(i=1;i<arr.length;i++){
        key = arr[i]
        j=i-1
        
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }

    return arr
}

console.log(insertionSort([12,11,4,1,45,5,32]))
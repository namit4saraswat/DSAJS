function swap(arr,i,j){
    let temp =arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    return arr
}   

function sortZeroOneTwo(arr){
    let zeroPos=0
    let twoPos=arr.length-1
    let midPos=0
    while(midPos<=twoPos){
        if(arr[midPos]===0){
            arr = swap(arr,zeroPos,midPos)
            zeroPos++
            // i--
        }
        
        if(arr[midPos]===2){
            arr = swap(arr,twoPos,midPos)
            twoPos--
            midPos--
        }
        midPos++
    }

    return arr
}

console.log(sortZeroOneTwo([2,0,2,0,0,1,2,2]))
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */


var dutchFlag = function(arr,N) {
    var swap = function(i,j){
        let temp = arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
    let low=0
    let mid=0
    let high=N-1
    while(mid<=high){
        if(arr[mid]===0){
            swap(low,mid)
            low++
            mid++
        }
        else if(arr[mid]===1){
            mid++
        }
        else if(arr[mid]===2){
            swap(mid,high)
            high--
        }
}
return arr
}

console.log(dutchFlag([0,2,1,2,0,1,1],7))
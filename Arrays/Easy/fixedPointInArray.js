var fixedPoint = function(arr,n){
    let left=0
    let right=n-1
    while(left<right){
        let mid=left+Math.floor((right-left)/2)
        if(arr[mid]===mid){
            return mid
        }else if(arr[mid]>mid){
            right=mid-1
        }else{
            left=mid+1
        }
    }

}


console.log(fixedPoint([-4,-2,1,2,4,7,8], 6))
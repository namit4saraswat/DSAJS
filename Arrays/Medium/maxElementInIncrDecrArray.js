var maxElement = function(arr){
    let start=0
    let end=arr.length-1
    while(start<=end){
        let mid = start+ Math.floor((end-start)/2)
        if(mid===0){
            return Math.max(arr[mid],arr[mid+1])
        }
        if(mid===arr.length-1){
            return Math.max(arr[arr.length-1], arr[arr.length-2])
        }
        if(arr[mid]>arr[mid+1]){
            if(arr[mid]>arr[mid-1]){
                return arr[mid]
            }
            end=mid-1
        }else{
            start=mid+1
        }
    }
}

console.log(maxElement([1,2,3,4,5,4,1,0]))
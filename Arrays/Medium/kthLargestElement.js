// Finding kth Largest element using binary search
var kthLargest = function(nums, k){
    let low = Number.POSITIVE_INFINITY
    let high = Number.NEGATIVE_INFINITY

    for(let i=0;i<nums.length;i++){
        if(nums[i]<low){
            low = nums[i]
        }
        if(nums[i]>high){
            high = nums[i]
        }
    }

    while(low<=high){
        let mid = low + Math.floor((high-low)/2)
        let count = 0

        //count number of element greater than mid in array
        for(let i=0;i<nums.length;i++){
            if(nums[i]>mid){
                count++
            }
        }

        // If there are at least K elements greater than mid, search the right half
        if (count >= k) {
            low = mid +1 
        }
        // Otherwise, search the left half
        else {
            high = mid -1
        }
    }

    return high
}

//parition Algorithm

var swap = function(X,a,b){
    let temp = X[a]
    X[a] = X[b]
    X[b] = temp
    return X
}

var partition = function(X,l,r){
    let pIndex = r
    let i=l
    let j=r
    do{
        i++
    }while(X[i]<X[pIndex])
    do{
        j++
    }while(X[i]>X[pIndex])
}

var kthLargestPartition = function(nums, p , q ,k){
    if(p === q){
        if(p===k){
            return nums[k]
        }else{
            return 
        }
    }

    let pivot = partition(nums, p ,q)
    if(pivot===k){
        return nums[k]
    }
    if(pivot<k){
        kthLargestPartition(nums,pivot+1,q,k)
    }else{
        kthLargestPartition(nums,p,pivot-1,k)
    }
}

console.log(kthLargestPartition( [12, 5, 787, 1, 23,523,123,625,62,134,66,6666],0,11,3))
function printPair(nums,l,r){
    if(l>=nums.length || r<0){
        return
    }
    console.log(nums[l] + ' '+ nums[r])
    if(l!=r){
        
    }
    printPair(nums,l+1,r)
    printPair(nums,l,r-1)
}

function printAllPairs(arr, index = 0) {
    // Base case: if index reaches the end of array, return
    if (index === arr.length) {
        return;
    }

    // Loop through array to print pairs with current element
    for (let i = 0; i < arr.length; i++) {
        console.log("(" + arr[index] + ", " + arr[i] + ")");
    }

    // Recursively call the function with next index
    printAllPairs(arr, index + 1);
}
printPair([1,2,3],0,2)
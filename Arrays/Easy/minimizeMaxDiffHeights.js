function calMinDiff(arr,k,n){
    arr.sort((a,b)=>a-b)
    let diff = arr[n - 1] - arr[0]

    for (let i = 1; i < n; i++) { 
        if(arr[i]-k<0) continue;
        let minInRange = Math.min(arr[0] + k, arr[i] - k);
        let maxInRange = Math.max(arr[n-i - 1] + k, arr[n - 1] - k); // Use i - 1 here
        
        diff = Math.min(diff, maxInRange - minInRange);
    }
    return diff;

}

console.log(calMinDiff([1,5,8,10],2,4))
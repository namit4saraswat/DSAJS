/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


/*
Follow below approach for this question
1. loop from N-1 to 0
2. Keep adding values to a new stack
3. 

*/
function nextGreaterElement(arr,N){
    let l=arr.length
    let ans = Array(N).fill(-1)
    for(let i=N-1;i>=0;i--){
        if(arr[i-1]<arr[i]){
            ans[i-1]=arr[i]
        }else if(arr[i-1]<ans[i]){
            ans[i-1]=ans[i]
        }
    }

    return ans
}

console.log(nextGreaterElement([10,3,12,4,2,9,13,0,8,11,1,7,5,6],14))
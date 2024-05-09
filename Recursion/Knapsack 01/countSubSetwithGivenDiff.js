let p2=0
let p1=0
function isSubsetSum(arr,i,p1sum,p2sum,d){
    if(i===arr.length){
        return 0
    }
    
    if(Math.abs(p1sum-p2sum)===d){
        console.log(p1sum + " " + p2sum)
        return 1
    }
    
    return isSubsetSum(arr,i+1,p1sum-arr[i],p2sum+arr[i],d) + isSubsetSum(arr,i+1,p1sum,p2sum,d) //if p1Sum is decreasing then p2sum will increase
   
}

var canPartition = function(nums,d) {
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    return isSubsetSum(nums,0,sum,0,d)
};

console.log(canPartition([3,2,1,1],1))

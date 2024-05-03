function permutationUtil(nums,ans,visited){
    if(ans.length===nums.length){
        console.log(ans)
        return
    }
    for(let i=0;i<nums.length;i++){
        if(!visited[i]){
            visited[i]=true
            ans.push(nums[i])
            permutationUtil(nums,ans,visited)
            ans.pop()
            visited[i]=false
            // i++
        }
    }  

}

var permutation = function(nums){
    let visited= Array(nums.length).fill(false)
    permutationUtil(nums,[],visited)
    
}

console.log(permutation([1,2,3]))
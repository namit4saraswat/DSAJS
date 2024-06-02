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
// console.log(permute([1,2,3]))

// --------------------------------- //

function swap(a, i, j) 
{ 
    let temp; 
let charArray = a.split(""); 
temp = charArray[i] ; 
charArray[i] = charArray[j]; 
charArray[j] = temp; 
return (charArray).join(""); 
} 

function permute(str, l, r) 
{ 
    if (l == r) 
            console.log(str); 
        else
        { 
            for (let i = l; i <= r; i++) 
            { 
                str = swap(str, l, i); 
                permute(str, l + 1, r); 
                str = swap(str, l, i); 
                console.log(str + ' Inside')
            } 
        } 
} 
  

  
let str = "ABC"; 
let n = str.length; 
permute(str, 0, n-1);
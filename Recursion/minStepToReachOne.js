
let count=0
function minSteps(n){
    if(n===1){
        return count
    }
    count++
    Math.min(minSteps(n/3),Math.min(minSteps(n/2),minSteps(n-1)))
    return  count
    
}

console.log(minSteps(10))
//Reduce 10->1 either by subtract 1  or deivide by 2 or devide by 3
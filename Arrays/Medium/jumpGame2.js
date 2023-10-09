/**
 * @param {number[]} nums
 * @return {number}
 */



var jump = function(N) {
    let len = N.length - 1, curr = -1, next = 0, ans = 0
    for (let i = 0; next < len; i++) {
        if (i > curr) ans++, curr = next
        next = Math.max(next, N[i] + i)
    }
    return ans
};
// console.log(jump([1,4,1,1,1,4,1,1,1,1,1]));
console.log(jump([1,4,1,5,1,4,1,1,2,1,1]));
// console.log(jump([2,3,1,1,4]));
// console.log(jump([2,1,1,1,1]));
// console.log(jump([1,2,2,1,3,0,0,3]));// "true" + 
// console.log(canJump([4,3,2,0,0,8]));//"false" +
// console.log(canJump( [2,0,1]));//"true" +
// console.log(canJump( [2,0,1,0]));//"true" +
// console.log(canJump( [2,0,0,0]));//"false" +
// console.log(canJump([3,1,0,0]));//"true" + 
// console.log(canJump( [2,0,0]));//"true" +
// console.log(canJump( [1,0,1,0]));//"false" +
// console.log(canJump([1,2,0,1]));//"true" + 
// console.log(canJump([3,0,8,2,0,0,1]))//"true"
// console.log(canJump([1,1,0,0]));//false
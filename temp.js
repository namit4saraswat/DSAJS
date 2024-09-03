/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ans = []
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let idx = -1;

    let end = null;

    for(let i=0;i<intervals.length;i++){
        if((end == null) || end<intervals[i][0]){
            ans.push([intervals[i][0],intervals[i][1]])
            end = intervals[i][1]
            idx++
        }else{
            ans[idx][1] = Math.max(intervals[i][1],end)
            end = Math.max(intervals[i][1], end);
        }
    }

    return ans
};

console.log(merge([[2,6],[1,3],[8,10],[15,18]]))
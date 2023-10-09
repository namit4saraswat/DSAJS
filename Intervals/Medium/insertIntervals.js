/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
//[[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
//[[1,2],[3,10],[12,16]]
var insert = function (intervals, newInterval) {
    if(intervals.length === 0){
        return [newInterval]
    }
    let ans = [];
    let idx = 0;
    for (let j = 0; j < intervals.length; j++) {
        if (intervals[j][1] < newInterval[0]) {
            ans.push([intervals[j][0], intervals[j][1]])
            idx++;
            if(j === intervals.length-1){
                ans.push(newInterval)
            }
            continue;
        }
        end = newInterval[1]>intervals[j][0] ? Math.max(intervals[j][1], newInterval[1]) : newInterval[1];
        ans.push([Math.min(intervals[j][0],newInterval[0]) ,end])
        for (let i = j; i<intervals.length; i++) {
            if (end < intervals[i][0]){
                ans.push([intervals[i][0], intervals[i][1]])
                end = intervals[i][1];
                idx++;
            } else {
                ans[idx][1] = Math.max(intervals[i][1], end);
                end = Math.max(intervals[i][1], end);
            }
        }
        break;
    }
    return ans;

};

console.log(insert([], [18,20]))
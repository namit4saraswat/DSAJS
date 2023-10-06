/**
 * @param {number[][]} points
 * @return {number}
 */

// points = [[10,16],[2,8],[1,6],[7,12]]
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let arrow = 0, end = null;

    for(let [x, y] of points) {
        if(end == null || end < x){
            arrow++
            end = y
        }else{
            end = Math.min(end, y);
        }
    }
    return arrow;
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))
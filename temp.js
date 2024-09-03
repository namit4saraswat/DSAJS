/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0
    let h=height.length-1
    area = 0
    while(l<h){
        area = Math.max(area, Math.min(height[l],height[h]) * (h-l))
        if(height[l]>height[h]){
            h--
        }else{
            l++
        }
    }

    return area
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
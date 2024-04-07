/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0
    let r=height.length-1
    let lmax=0
    let rmax=0
    let area=0
    while(l<r){
        area=Math.max(area,(Math.min(height[l],height[r])*(r-l)))
        if(height[l]>height[r]){
            r--
        }else{
            l++
        }
    }   
    return area
};
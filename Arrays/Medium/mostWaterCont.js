/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let water = 0
    let left = 0
    let right = n-1
    let leftMax = height[left]
    let area =0
    let maxArea = 0
    while(left<right){
        if(leftMax<height[left]){
            leftMax = height[left]
        }
        if(height[left+1]<leftMax){
            area = area + Math.min(height[left], height[left+1])
        }else{
            area = Math.min(height[left], height[left+1])
        }
        if(area>maxArea){
            maxArea = area
        }
        left++
    }
};
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length;
    let left = 0; // Pointer for the left side
    let right = n - 1; // Pointer for the right side
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;
    
    while(left<right){
        if(height[left]<height[right]){
            if(leftMax < height[left]){
                leftMax = height[left];
            }else{
                totalWater = totalWater + leftMax - height[left]
            }
            left++;
        }else{
            
        }
        
    }
    };

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
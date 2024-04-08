/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ans = []
    let map = new Map()
    let m=nums1.length
    let n=nums2.length
    for(let i=0;i<Math.max(m,n);i++){
        if(map.has(nums1[i])){
            if(map.get(nums1[i])===2){
                ans.push(nums1[i])
                map.delete(nums1[i])
                map.delete(nums2[i])
            }
        }else{
            map.set(nums1[i],1)
        }
        if(map.has(nums2[i])){
            if(map.get(nums2[i])===1){
                ans.push(nums2[i])
                map.delete(nums2[i])
                map.delete(nums1[i])
            }
        }else{
            map.set(nums2[i],2)
        }
    }
    return ans
};

console.log(intersection([1,2,2,1],[2,2]))
const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let q = new MinPriorityQueue()
    let map = new Map()
    let ans=[]

    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }

    for (let [num, frequency] of map) {
        q.enqueue([frequency, num]);
        if (q.size() > k) {
            q.dequeue();
        }
    }

    while(q.size()>0){
        ans.push(q.dequeue()[1])
    }

    return ans
};

console.log(topKFrequent([1,1,1,2,2,3],2))
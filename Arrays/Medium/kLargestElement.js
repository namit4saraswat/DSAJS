const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
  } = require('@datastructures-js/priority-queue');

var findKthLargest = function(nums, k) {
    const minPriQue = new MinPriorityQueue();
    for(let i = 0; i < nums.length; i++){
        minPriQue.enqueue(nums[i]);
        if(minPriQue.size() > k){
                minPriQue.dequeue();
                
            }
    }

    return minPriQue.front().element

};

// ****** Another solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest2 = function(nums, k) {
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        min = Math.min(min, curr);
        max = Math.max(max, curr);
    }

    const freq = new Array(max - min + 1).fill(0);

    for(let i = 0; i < nums.length; i++) {
        freq[nums[i] - min]++; 
    }

    for (let i = freq.length - 1; i >= 0; i--) {
        k -= freq[i]
        if (k <= 0) return i + min;
    }

};

// *************3rd Solution******************

var findKthLargest3 = function (nums, k) {
    let N = nums.length
    let sum = 0
    for (let i = 0; i < N; i++) {
        sum += nums[i]
    }
    function find(items = nums, total = sum, index = k) {
        let n = items.length
        if (n == 1) return items[0]
        let lt = []
        let gte = []
        let ave = total / n
        let lt_sum = 0
        let num
        for (let i = 0; i < n; i++) {
            num = items[i]
            if (num < ave) {
                lt_sum += num
                lt.push(num)
            } else gte.push(num)
        }
        if (lt.length == 0) return items[0]
        if (index <= gte.length) return find(gte, total - lt_sum, index)
        return find(lt, lt_sum, index - gte.length)
    }
    return find()
};
console.log(findKthLargest3([0,4,12,6,2,1,7], 3))




// for(let i = 0; i < nums.length; i++){
//     
//     
// }
// return minPriQue.front().element;
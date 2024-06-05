const { MinPriorityQueue } = require ("@datastructures-js/priority-queue")


function kLargestEle(nums,k){
    const minPriQue = new MinPriorityQueue();
    for(let i=0;i<nums.length;i++){
        minPriQue.enqueue(nums[i]);
        if(minPriQue.size()>k){
            minPriQue.dequeue()
        }
    }

    while(minPriQue.size()>0){
        console.log(minPriQue.front())
        minPriQue.dequeue()
    }

}


kLargestEle([3,2,5,4,62,23,1,0],3)
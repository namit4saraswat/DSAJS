/**
 * @param {number[]} nums
 * @return {number}
 */
//[100,4,200,1,3,2] =>4 [0,3,7,2,5,8,4,6,0,1] => 9
var longestConsecutive = function (nums) {
    var set = new Set(nums);
    let maxSeq = 0;

    for(let num of set){
        if(!set.has(num-1)){
            let currNum = num;
            let currSeq = 1;

            while(set.has(currNum + 1)){
                currNum++;
                currSeq++;
            }

            maxSeq = Math.max(maxSeq, currSeq)

        }
    }

    return maxSeq;
};

console.log(longestConsecutive([0,1,3,4,5, -1,-2]))
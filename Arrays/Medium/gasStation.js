/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

//gas = [1,2,3,4,5], cost = [3,4,5,1,2]
var canCompleteCircuit = function(gas, cost) {
    let startIdx = 0;
    let fuelLeft = 0;
    let count = 0;
    const n = gas.length;
    reach= new Array(5).fill(0);
    for (let j = 0; j < n; j++) {
        if (gas[j] < cost[j]) {
            if(j === n-1){
                 return -1;
            }
            continue;
        }
        fuelLeft = gas[j];
        startIdx = j;
        while (count < n) {
            if(reach[startIdx]>=n-count){
                return j
            }
            fuelLeft = fuelLeft - cost[startIdx % n];
            if (fuelLeft < 0 ) {
                break;
            }
            fuelLeft = fuelLeft + gas[(startIdx + 1) % n]
            startIdx++;
            count++;
        }

        if (count === n) {
            return j;
        }
        reach[j] = count;
        if(j === n-1 && fuelLeft<0){
            return -1;
       }
        
        
        count = 0;
    }
    
};

console.log(canCompleteCircuit([0,0,0,0,0,1]  ,[0,0,0,0,2,0]))
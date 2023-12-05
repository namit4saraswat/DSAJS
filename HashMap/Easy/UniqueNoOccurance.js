/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map1 = new Map();
    let set1 = new Set();
    let length = 0;
    for(let i=0;i<arr.length;i++){
        if(map1.has(arr[i])){
            map1.set(arr[i], map1.get(arr[i]) + 1)
        }else{
            map1.set(arr[i], 1)
            length++;
        }
    }
    for(itr of map1.values()){
        set1.add(itr)
    }
    if(set1.size != length){
        return false
    }else{
        return true
    }
};

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))